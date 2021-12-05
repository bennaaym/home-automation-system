import { DarkThemeWindow,DefaultWindow } from '../utils/CustomIcons';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getLampStateExpression,getWindowStateExpression,switchLight, switchWindow } from '../redux/crud';
import { Icon,Badge } from 'react-native-elements'
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { Switch } from 'react-native';
import useThingSpeak from '../hooks/useThingSpeak';
import { deviceWidgetStyle, deviceWidgetOn } from '../styles/RoomStyle';

const DeviceWidget = ({deviceNo,type,icon}) => {
    const dispatch =useDispatch()
    const expression = (type=="Lamp")?getLampStateExpression(deviceNo):((type=="Window")?getWindowStateExpression(deviceNo):null)
    const currentState = expression?useSelector(expression):null
    const [Device,setDevice] = useState(currentState);
    useEffect(()=>{
        setDevice(currentState)
    },[currentState])
    const switchDevice = (type) => {
      if(Device == 180 || Device == 1)setDevice(0)
      else {(type == "window")?setDevice(180):setDevice(1)}
    }
    const widgetStyle = (Device == 1 || Device == 180) ? StyleSheet.compose(deviceWidgetOn.container,deviceWidgetStyle.container):
    StyleSheet.compose(deviceWidgetStyle.lightOff,deviceWidgetStyle.container);
    return (
      <View style={widgetStyle}>
        <View style={deviceWidgetStyle.topPart}>
          {(type=="Window")?(Device==0? DefaultWindow:DarkThemeWindow):(
            (type=="Lamp")?<Icon name={icon} type='font-awesome-5' color={`${Device == 1 ?'#E3EBFF':'#4392F1'}`}/>
            :"")}
          {Device != null? 
          <Switch onValueChange={()=>{(type=="Lamp")?switchLight(deviceNo,Device,dispatch):switchWindow(deviceNo,Device,dispatch);
          switchDevice(type);}} value={(Device == 0 )? false:true} thumbColor={(Device == 1 || Device == 180 )? "#5BEC5B" : "#f4f3f4"} trackColor={{ false: "#767577", true: "#C2FFC2" }}/>:""}
        </View>
        <View style={deviceWidgetStyle.bottomPart}>
            <Text style={(Device == 1 || Device == 180) ? deviceWidgetOn.room : deviceWidgetStyle.room}>{(type=="Lamp")?"Light":((type=="Window")?"Window":"")}</Text>
        </View>
      </View>
    );
  }
  
  
  export default DeviceWidget ;
