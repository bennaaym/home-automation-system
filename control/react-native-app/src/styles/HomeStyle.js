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
      marginLeft:'6%',
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
    width: '45%',
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderBottomRightRadius:30,
    height: 150,
    shadowColor: '#ccc',
    shadowOffset: {width: -5, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 15
  },
  bottomPart: {

  },
  room: {
    fontWeight: '700',
      fontSize:16,
      color: '#07070A'
  },
  state:{   
    color: '#363636'
  },
  topPart: {
    justifyContent:'space-between',
    flexDirection: 'row',
    padding: 5,
  }
})