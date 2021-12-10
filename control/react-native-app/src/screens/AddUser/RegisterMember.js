import React,{useState} from "react";
import { View,Text,SafeAreaView,TextInput,TouchableHighlight } from "react-native";
import {__doCreateUser} from '../../firebase/auth'
import { styles } from "../../styles/AddUserPageStyle";
import { Icon } from "react-native-elements";
import {useDispatch} from 'react-redux'
import { AddVisitor } from "./AddVisitor";
export const RegisterMember = ({props}) => {
    const {navigation} = props
    const dispatch = useDispatch()
    const blue = "#ff0000";
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetching, setFetching] = useState(false)
    const [addToFirestore,setAddToFirestore] = useState(false)
    const [uid,setUid] = useState("")
    const [error, setError] = useState("")
    const [isValid, setValid] = useState(true)
    const __doSignUp = () => {
      if (!email) {
        setError("Email required *")
        setValid(false)
        return
      }else if(!password ){
        setError("Password required *")
        setValid(false)
        return
      } 
      else if ( password.trim() && password.length < 6) {
        setError("Weak password, minimum 5 chars")
        setValid(false)
        return
      } else if (!__isValidEmail(email)) {
        setError("Invalid Email")
        setValid(false)
        return
      }
      __doCreateUser(email, password,dispatch)
      setAddToFirestore(true)
    }

  
    const __isValidEmail = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };
    if(addToFirestore)return(<AddVisitor />)
    return (
          <View style={styles.formContainerStyle}>
            {error ? (
            <View style={styles.errorLabelContainerStyle}>
                <Text style={styles.errorTextStyle}>{error}</Text>
            </View>
            ) : null}
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
                    onChangeText={text => setPassword(text)}
                />
                <Icon name="user-lock" type='font-awesome-5' color='#595266'  size={22}/>  
            </View>
        
        <View style={{flex:0.3,justifyContent:'space-between',flexDirection:'row',marginHorizontal:5,marginTop:7}}>
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
          <TouchableHighlight
            style={styles.cancelButtonStyle}
            onPress={()=>{navigation.navigate("Home")}}
            underlayColor={blue}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.cancelButtonTextStyle}>Cancel</Text>
            </View>
          </TouchableHighlight>
        </View>
        </View>
    )
  }