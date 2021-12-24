import React, {useState, useRef,useEffect} from 'react';
import  {useSelector,useDispatch} from 'react-redux'
import { styles,headerStyles } from '../../styles/QrPageStyle';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Share from 'react-native-share';
import QRCode from 'react-native-qrcode-svg';
import auth from '@react-native-firebase/auth'
import { getUserKeyByUid } from '../../firebase/actions/dbActions';

export const QrPage = (props) => {
  const uid = auth().currentUser.uid
  const key = getUserKeyByUid(uid)
  const {navigation} = props
  const dispatch = useDispatch()
  const [qrvalue, setQrvalue] = useState(key);
  let myQRCode = useRef();
  useEffect(() => {
    setQrvalue(key)
  }, [key])
  const shareQRCode = async () => {
    
    myQRCode.toDataURL(async(dataURL) =>  {
        //console.log(dataURL)
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        message: `your generated Qr code`,
        subject: 'Share Link', //  for email
      };
      try {
        await Share.open(shareImageBase64);
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <SafeAreaView style={headerStyles.containerStyle}>
     <View style={headerStyles.headerContainerStyle}>
        <Text style={headerStyles.headerTitleStyle}> Your Qr Code </Text>
      </View>
      <View style={styles.container}>
          <Text style={styles.titleStyle}>
            Generated QR Code
          </Text>
          <QRCode
            getRef={(ref) => (myQRCode = ref)}
            // ref={myQRCode}
            //QR code value
            value={qrvalue ? qrvalue : 'NA'}
            //size of QR Code
            size={230}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor="white"
            //Center Logo size  (Optional)
            logoSize={30}
            //Center Logo margin (Optional)
            logoMargin={2}
            //Center Logo radius (Optional)
            logoBorderRadius={15}
            //Center Logo background (Optional)
            logoBackgroundColor="yellow"
          />

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={shareQRCode}>
            <Text style={styles.buttonTextStyle}>
              Share QR Code
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={()=>{navigation.navigate('Home')}}>
            <Text style={styles.buttonTextStyle}>
              Back to homepage
            </Text>
          </TouchableOpacity>
        </View>    
    </SafeAreaView>
      
  );
};

