import React  from 'react';
import { StyleSheet  } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title :{
      fontSize: 16,
      fontWeight:'bold',
      color: '#000',
      margin: 10
    },
    roomContainer:{
      marginTop: 20,
      marginLeft:20,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  });

export const roomWidgetStyle = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flexDirection: 'column',
    padding: 12,
    marginRight:12,
    marginBottom:12,
    width: 150,
    borderTopLeftRadius: 30,
    borderBottomRightRadius:30,
    borderTopRightRadius: 5,
    borderBottomLeftRadius:5,
    height: 150,
    shadowColor: '#ccc',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 15,
  },
  bottomPart: {

  },
  room: {
    fontFamily: 'OpenSans-SemiBold',
      fontSize:16,
      color: '#07070A'
  },
  state:{   
    color: '#363636',
    fontFamily: 'Montserrat-Regular',
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

export const roomWidgetLightOn = StyleSheet.create({
  container: {
    backgroundColor: "#4392F1",
    color: "#fff"
  },
  room: {
    fontFamily: 'OpenSans-SemiBold',
      fontSize:16,
      color: '#fff'
  },
  state:{   
    color: '#ccc',
    fontFamily: 'Montserrat-Regular',
  },
})