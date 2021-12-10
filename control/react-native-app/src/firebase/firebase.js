// database/firebaseDb.js

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWMx47rjEgc3r-QjmUCMbGQZMdpOGJoN8",
    authDomain: "bsm313-home-automation.firebaseapp.com",
    projectId: "bsm313-home-automation",
    storageBucket: "bsm313-home-automation.appspot.com",
    messagingSenderId: "440158712476",
    appId: "1:440158712476:web:cc25e1d47a7de4cf10b359",
    measurementId: "${config.measurementId}"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export const db = firebase.firestore();