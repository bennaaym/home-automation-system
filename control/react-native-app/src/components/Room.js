import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import Window from './Window';
import Lamp from './Lamp'
import TemperatureReader from './TemperatureReader';


const Room = ({name,lampNo,windowNo,color}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
        <Lamp lampNo={lampNo} color={color}/>
        <Window windowNo={windowNo}/> 
        <TemperatureReader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    borderColor: "#000",
    padding:12,
    borderWidth:3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title :{
    fontSize: 16,
    fontWeight:'bold',
    color: '#000',
    margin: 10
  }
});

export default Room ;