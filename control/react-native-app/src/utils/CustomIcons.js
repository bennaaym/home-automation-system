import React from "react"
import { Image } from "react-native"
import { roomStyles } from '../styles/RoomStyle';

export const DarkThemeWindow = (<Image source={require("../../assets/images/icons/windowWhite.png")} style={roomStyles.customIcon}/>);

export const DefaultWindow = (<Image source={require("../../assets/images/icons/window.png")} style={roomStyles.customIcon}/>);