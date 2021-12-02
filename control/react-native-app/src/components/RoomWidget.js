import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React  from 'react';
import { Icon,Badge } from 'react-native-elements'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Window from './Window';
import Lamp from './Lamp'
import TemperatureReader from './TemperatureReader';
import useThingSpeak from '../hooks/useThingSpeak';
import { roomWidgetStyle } from '../styles/HomeStyle';

const RoomWidget = ({name,lampNo,windowNo,color,icon}) => {
  useThingSpeak(lampNo,windowNo)
  return (
    <View style={roomWidgetStyle.container}>
      <View style={roomWidgetStyle.topPart}>
      <Icon
            name={icon}
            type='font-awesome-5'
            color='#1A00D7'
        />
        <Badge
            status="error"
            badgeStyle={{width:10,height:10}}
            containerStyle={{ position: 'absolute',top: 17, right: 15}}
        />
      </View>
      <View style={roomWidgetStyle.bottomPart}>
          <Text style={roomWidgetStyle.room}>{name}</Text>
          <Text style={roomWidgetStyle.state}>closed</Text>
      </View>
    </View>
  );
}


export default RoomWidget ;