import {SafeAreaView,View,Text} from 'react-native';
import AppContainer from './src/navigation/AppContainer';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect }  from 'react';
import {Login} from "./src/screens/Login/index"
import { SettingsModal } from './src/components/SettingsModal';
import  {getUserByUid } from './src/firebase/actions/dbActions';

const App = () => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [username,setUserName] = useState("")
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
       <Login />
    );
  }  
  return (
    <SafeAreaView style={{flex: 1,}}>  
      <AppContainer/>
    </SafeAreaView>
  );
};

export default App;




