import React,{useState} from "react"
import { View,Text,SafeAreaView,StyleSheet,TextInput,TouchableHighlight  } from "react-native"
import { styles } from "../../styles/LoginPageStyle"
import { doSignIn } from "../../firebase/auth";
import { SmartHomeLogo } from "../../utils/CustomIcons";
import { Icon } from "react-native-elements";
export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState("")
    const [isValid, setValid] = useState(true)
    const blue = "#ff0000";
    const __doSignIn = () => {
        if (!email) {
          setError("Email required *")
          setValid(false)
          return
        } else if (!password ) {
          setError("Password required *")
          setValid(false)
          return    
        }else if (!__isValidEmail(email)) {
          setError("Invalid Email")
          setValid(false)
          return
        }
    
        doSignIn(email, password)
      }
      const __isValidEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
  
    return (
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.headerContainerStyle}>
          <Text style={styles.headerTitleStyle}> Smart Home </Text>
          <View style={styles.logoContainer}>
          {SmartHomeLogo}
          </View>
        </View>
        <View style={styles.formContainerStyle}>
          <Text style={styles.formTitleStyle}> Sign In </Text>
          <View style={styles.InputContainer}>
          <TextInput
            label={"Email"}
            keyboardType="email-address"
            style={styles.textInputStyle}
            placeholder="Mail address"
            onChangeText={text => {
              setError
              setEmail(text)
            }}
            error={isValid}
          />
        <Icon name="envelope" type='font-awesome-5' color='#595266' size={22}/>
            </View>
            <View style={styles.InputContainer}>
                <TextInput
                    label={"Password"}
                    secureTextEntry
                    style={styles.textInputStyle}
                    selectionColor={blue}
                    placeholder="Password"
                    error={isValid}
                    onChangeText={text => {
                        setError
                        setPassword(text)
                    }}
                />   
                <Icon name="user-lock" type='font-awesome-5' color='#595266'  size={22}/>   
           </View>  
          {error ? (
          <View style={styles.errorLabelContainerStyle}>
            <Text style={styles.errorTextStyle}>{error}</Text>
          </View>
        ) : null}
        <View style={styles.signInButtonContainerStyle}>
          <TouchableHighlight
            style={styles.signInButtonStyle}
            onPress={()=>{ __doSignIn(email,password)}}
            underlayColor={blue}
          >
            <View>
              <Text style={styles.signInButtonTextStyle}>Continue</Text>
            </View>
          </TouchableHighlight>
        </View>
        </View>

      </SafeAreaView>
    )
  }

