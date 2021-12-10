import React,{useState} from "react"
import auth,{firebase} from '@react-native-firebase/auth';
import { Alert } from "react-native";
import {setNewUser} from './redux/actions/newuser'

let uid;

export const doSignIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        Alert.alert("Success ✅", "Authenticated successfully")
      }
    } catch (e) {
        let err = e.message
        let message = err.substring(err.indexOf("]")+1, err.length)
        if(err.indexOf("wrong-password") > -1)
            Alert.alert("wrong password",message)
            else if (err.indexOf("user-not-found") > -1)Alert.alert("Wrong email",message)
            else console.log(e.message)
    }
  }

export const doSignOut = async () => {
    await firebase.auth().signOut();
}

export const __doCreateUser = async (email, password,dispatch) => {
  try {
    let response = await auth().createUserWithEmailAndPassword(
      email,
      password
    )
    if (response && response.user) {
      console.log(response)
      dispatch(setNewUser(response.user.uid))
      Alert.alert("Success ✅", "Account created successfully")
      return(uid)
    }
  } catch (e) {
    console.error(e.message)
  }
}
