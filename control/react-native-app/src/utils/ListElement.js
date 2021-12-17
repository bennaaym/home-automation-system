import React from "react";
import { TouchableOpacity,Text,View } from "react-native";
import { roomStyles } from "../styles/RoomStyle";
import { Icon } from "react-native-elements";

export const ListElement = ({current=null,name,props,devices,lampNo,windowNo}) => {
    return(
        <TouchableOpacity style={roomStyles.flatListElement} onPress={() => {props.navigate('Room',{ name: name,lampNo: lampNo,windowNo: windowNo,devices: devices})}}>
            <Text style={roomStyles.flatListElementText}>{name}</Text>
            {(name == current)?<Icon            
                    name="dot-circle"
                    type='font-awesome-5'
                    color='#2892D7'
                    size={13} />:null}
        </TouchableOpacity>
    )
}