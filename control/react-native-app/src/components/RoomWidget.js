import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React  from 'react';
import { useSelector } from 'react-redux';
import { getLampStateExpression } from '../redux/crud';
import { Icon,Badge } from 'react-native-elements'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native';
import useThingSpeak from '../hooks/useThingSpeak';
import { roomWidgetStyle,roomWidgetLightOn } from '../styles/HomeStyle';

const RoomWidget = ({name,lampNo=null,windowNo=null,devices=null,icon,props}) => {
  useThingSpeak(lampNo,windowNo)
  const {navigation} = props;
  const Lamp = (getLampStateExpression(lampNo) != null) ? useSelector(getLampStateExpression(lampNo) ) : null;
  const widgetStyle = Lamp == 1 ? StyleSheet.compose(roomWidgetLightOn.container,roomWidgetStyle.container ):
  StyleSheet.compose(roomWidgetStyle.lightOff,roomWidgetStyle.container);
  return (
    <TouchableOpacity style={widgetStyle} onPress={()=>{if(lampNo && windowNo)navigation.navigate('Room',{ name: name,lampNo: lampNo,windowNo: windowNo,devices: devices})}}>
      <View style={roomWidgetStyle.topPart}>
      <Icon
            name={icon}
            type='font-awesome-5'
            color={`${Lamp == 1 ?'#E3EBFF':'#4392F1'}`}
        />
        {lampNo?<Switch value={Lamp == 1 ? true : false} thumbColor={Lamp == 1 ? "#5BEC5B" : "#f4f3f4"} trackColor={{ false: "#767577", true: "#C2FFC2" }}/>:
          null
        }
      </View>
      <View style={roomWidgetStyle.bottomPart}>
          <Text style={Lamp == 1 ? roomWidgetLightOn.room : roomWidgetStyle.room}>{name}</Text>
          <Text style={Lamp == 1 ? roomWidgetLightOn.state :roomWidgetStyle.state}>{Lamp == 1 ? "On" : (Lamp == 0 ? "Off" : "Configure a new room")}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default RoomWidget ;