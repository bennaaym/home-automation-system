import { db } from "../firebase"
import { useState } from "react";
import { setNewUser, setPictureUrl,setUserKey } from "../redux/actions/newuser";
import uuid from 'react-native-uuid';
import { Alert } from "react-native";


export const getUserByUid = (uid) => {
    const [username,setUserName] =  useState("")
    db
    .collection('users')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        if(documentSnapshot.data().uid == uid) setUserName(documentSnapshot.data().name);
      });
    });
    return(username)
}

export const getUserRoleByUid = (uid) => {
    const [isAdmin,setIsAdmin] =  useState(false)
    db
    .collection('users')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        if(documentSnapshot.data().uid == uid) setIsAdmin(documentSnapshot.data().admin);
      });
    });
    return(isAdmin)
}

export const getUserKeyByUid = (uid) => {
  const [key,setKey] =  useState("")
  db
  .collection('users')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      if(documentSnapshot.data().uid == uid) setKey(documentSnapshot.data().key);
    });
  });
  return(key)
}

export const verifyKey = (key,collection) => {
  let exists = false
  db
  .collection(collection)
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      if(documentSnapshot.data().key == key){
        exists = true
      };
    });
  });
  return(exists)
}

export const generateUniqueKey = (collection) => {
   let uniqueKey = uuid.v4()
   while(verifyKey(uniqueKey,collection) == true){
      uniqueKey = (uuid.v4())
   }
   return uniqueKey
}

export const addMember = (uid,picture_url,name,admin,dispatch) => {
  var uniqueKey  = generateUniqueKey('users')
  db
  .collection('users')
  .add({
    name: name,
    picture_url: picture_url,
    uid: uid,
    admin : admin,
    key: uniqueKey
  })
  .then(() => {
    dispatch(setUserKey(uniqueKey))
    Alert.alert("Success ✅", "member added successfully")
    dispatch(setPictureUrl(""))
    dispatch(setNewUser(""))
  });
}

export const addVisitor = (picture_url,name,dispatch) => {
  var uniqueKey  = generateUniqueKey('visitors')
  console.log(uniqueKey)
  db
  .collection('visitors')
  .add({
    name: name,
    picture_url: picture_url,
    key: uniqueKey
  })
  .then(() => {
    dispatch(setUserKey(uniqueKey))
    Alert.alert("Success ✅", "visitor added successfully")
    dispatch(setPictureUrl(""))
  });
}
