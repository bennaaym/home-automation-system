import React,{useState} from "react";
import { Text, View,TextInput,TouchableHighlight } from "react-native";
import { CheckBox } from 'react-native-elements'
import { Icon } from "react-native-elements";
import auth from '@react-native-firebase/auth'
import { useSelector,useDispatch } from 'react-redux';
import { styles } from "../../styles/AddUserPageStyle";
import { AddPicture } from "./AddPicture";

export const AddVisitor = ({visitor=false}) => {
    const uid = useSelector(state => state.userReducer.uid)
    const picture_url = useSelector(state => state.userReducer.picture_url)
    const blue = "#ff0000";
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [pictureUploaded,setPictureUploaded] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState("")
    const [isValid, setValid] = useState(true)
    const [key,setKey] = useState("")
    const __doSignUp = () => {
      if (!name) {
        setError("name required *")
        setValid(false)
        return
      }
      //__doCreateUser(email, password,dispatch)
    }
    if(picture_url.length == 0)return(<AddPicture />)
    return (
          <View style={styles.formContainerStyle}>
            {error ? (
            <View style={styles.errorLabelContainerStyle}>
                <Text style={styles.errorTextStyle}>{error}</Text>
            </View>
            ) : null}
            <View style={styles.InputContainer}>
                <TextInput
                    label={"Name"}
                    style={styles.textInputStyle}
                    placeholder="name"
                    onChangeText={text => {
                    setError
                    setName(text)
                    }}
                    error={isValid}
                />
                <Icon name="user" type='font-awesome-5' color='#595266' size={22}/>
            </View>  
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',paddingRight: 10}}>
            <CheckBox
                iconRight
                title='Admin'
                containerStyle={{backgroundColor: 'transparent',borderColor:'transparent',paddingHorizontal:0}}
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={admin}
                onPress={() => setAdmin(!admin)}
                />
                <Icon name="user-shield" type='font-awesome-5' color='#595266'  size={22}/>  
            </View>
        
        <View style={styles.signInButtonContainerStyle}>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={__doSignUp}
            underlayColor={blue}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.signInButtonTextStyle}>Continue</Text>
            </View>
          </TouchableHighlight>
        </View>
        </View>)
}