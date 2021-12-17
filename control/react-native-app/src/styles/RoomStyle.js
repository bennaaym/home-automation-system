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
        height: 340,
        paddingHorizontal:15
    },
    temperatureContainer:{
      paddingTop: 15,
      height: 340
  },
    customIcon: {
        width: 45,
        height: 45
    },
    displayTitle:{
      fontFamily: 'OpenSans-Regular',
      color: '#274C77',
      textAlign: 'center',
      fontSize: 17
    },
    display:{
      paddingTop:18
    },
    flatList:{
      height:70,
      alignContent:'center',
      paddingTop: 10,
      marginTop: 15
    },
    flatListElement:{
      fontFamily: 'OpenSans-SemiBold',
      marginLeft: 30
    },
    flatListElementText:{
      fontFamily: 'OpenSans-SemiBold',
      marginBottom: 5
    },
  });

  export const deviceWidgetStyle = StyleSheet.create({
    container: {
      marginTop:50,
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