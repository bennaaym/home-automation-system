import { db } from "../firebase"
import { useState } from "react";


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
