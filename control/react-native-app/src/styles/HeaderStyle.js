import React  from 'react';
import { StyleSheet  } from 'react-native';

export const HeaderStyles = StyleSheet.create({
    title :{
      fontSize: 22,
      fontFamily: 'roboto',
      fontWeight:'bold',
      color: '#2E2D39'
    }
  });

  export const BannerStyles = StyleSheet.create({
   title :{
     fontSize: 25,
     fontWeight:'bold',
     color: '#000',
     paddingBottom: 12
   },
   container: {
           padding: 13,
           height: 110,
           borderBottomRightRadius:30,
           borderBottomLeftRadius:30,
           width: '100%',
           alignContent:"center",
           backgroundColor: "#fff",
           marginTop: 0
   },
   description: {
       fontSize: 15,
       color: '#2E2D39',
       paddingBottom: 12
      }
 });