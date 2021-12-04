import React  from 'react';
import { StyleSheet,StatusBar  } from 'react-native';

export const roomStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    },
    title :{
      fontSize: 16,
      fontWeight:'bold',
      color: '#000',
      margin: 10
    },
    widgetContainer:{
        padding: 15,
        flex:1,
    },
    roomContainer:{
      marginTop: 20,
      marginLeft:'6%',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },
    customIcon: {
        width: 45,
        height: 45
    }
  });

  export const deviceWidgetStyle = StyleSheet.create({
    container: {
      justifyContent:'space-between',
      flexDirection: 'column',
      padding: 14,
      marginBottom:12,
      width:140,
      borderRadius: 30,
      marginHorizontal:10,
      height: 125,
      shadowColor: '#ccc',
      shadowOffset: {width: -5, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    title: {
      fontSize: 15,
    },
    bottomPart: {
        paddingLeft:10
    },
    room: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize:15,
        color: '#07070A'
    },
    topPart: {
      justifyContent:'space-between',
      flexDirection: 'row',
      padding: 5,
    },
      lightOff: {
        backgroundColor: "#fff"
      }
  })
  
  export const deviceWidgetOn = StyleSheet.create({
    container: {
      backgroundColor: "#4392F1",
      color: "#fff"
    },
    room: {
        fontSize:16,
        color: '#fff',
        fontFamily: 'OpenSans-SemiBold',
    },
  })