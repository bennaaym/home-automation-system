import React,{useState} from 'react';
import { View, Image, Button, Platform, TouchableHighlight,Text,Alert} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { AddPictureStyles } from '../../styles/AddUserPageStyle';
import { uploadPicture,getPictureUrl } from '../../firebase/actions/storageActions';
import { useDispatch } from 'react-redux';
import * as Progress from 'react-native-progress';

export const AddPicture = () => {
    const [photo, setPhoto] = useState(null);
    const dispatch = useDispatch()
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const handleChoosePhoto = () => {
      launchImageLibrary({ noData: true }, (response) => {
        if (response) {
          if(!response.didCancel && !response.error)setPhoto(response.assets[0]);
        }
      });
    };

    const handleUploadImage = async () => {
        const { uri } = photo;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        setUploading(true);
        setTransferred(0);
        const task = uploadPicture(filename,uri)
        // set progress state
        task.on('state_changed', snapshot => {
          setTransferred(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
          );
        });
        try {
          await task;
          getPictureUrl(filename,dispatch)   
        } catch (e) {
          console.error(e);
        }
        setUploading(false);
        setPhoto(null);
        Alert.alert(
          'Photo uploaded!',
          'Your photo has been uploaded to Firebase Cloud Storage!'
        );
      };

    return (
        <View style={AddPictureStyles.container}>
            <TouchableHighlight style={AddPictureStyles.chooseButton} onPress={handleChoosePhoto} >
                <Text style={AddPictureStyles.chooseButtonText} >Choose Photo</Text>
            </TouchableHighlight>
          {photo && (
            <>
              <Image
                source={{ uri: photo.uri }}
                style={AddPictureStyles.pictureContainer}
              />
              {uploading ? (
                <View style={{margin: 20}}>
                    <Progress.Bar progress={transferred} width={300} />
                </View>) : (<TouchableHighlight style={AddPictureStyles.uploadButton} onPress={handleUploadImage} >
                                <Text style={AddPictureStyles.chooseButtonText} >Upload Photo</Text>
                            </TouchableHighlight>)}
            </>
          )}
          
        </View>
      );
}