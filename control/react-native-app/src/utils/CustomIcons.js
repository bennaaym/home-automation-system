import React from "react"
import { Image } from "react-native"
import { roomStyles } from '../styles/RoomStyle';
import { styles } from "../styles/LoginPageStyle";

export const DarkThemeWindow = (<Image source={require("../../assets/images/icons/windowWhite.png")} style={roomStyles.customIcon}/>);

export const DefaultWindow = (<Image source={require("../../assets/images/icons/window.png")} style={roomStyles.customIcon}/>);

export const SmartHomeLogo = (<Image source={require("../../assets/images/logos/smart-home.png")} style={styles.customIcon}/>)