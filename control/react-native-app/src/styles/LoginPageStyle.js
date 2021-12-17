import React  from 'react';
import { StyleSheet  } from 'react-native';
const blue = "#ff0000";
const baseMargin = 5;
const doubleBaseMargin = 10;

export const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      top: 0,
      flexDirection: "column",
      justifyContent: "space-between", 
      backgroundColor:"#E0E0E0" 
    },
    logoContainer:{
        width: '70%',
        height: '70%',
        justifyContent: "center",
        alignItems: "center"
    },
    headerContainerStyle: {
      height: '50%',
      paddingTop: 30,
      alignItems: "center",
      justifyContent:'space-evenly'
      
    },
    formTitleStyle: {
      color: '#4392F1',
      fontSize: 20,
      textAlign: "center",
      fontFamily: 'OpenSans-SemiBold',
    },
    headerTitleStyle: {
        color: "#8CAD34",
        fontSize: 30,
        textAlign: "center",
        fontFamily: 'OpenSans-SemiBold',
      },
    formContainerStyle: {
      paddingHorizontal: 25,
      backgroundColor: "#fff",
      borderTopLeftRadius: 50,  
      borderTopRightRadius: 50,      
      justifyContent: "center",
      alignContent:"center",
      height: '50%'
    },
    textInputStyle: {
      backgroundColor: "transparent",
      height: 50,
      fontSize: 14,
      width: '90%'
    },
    InputContainer: {
        flexDirection: 'row',
        alignItems:"center",
        paddingVertical:0,
        width: '100%',     
        justifyContent: "space-between",
        borderBottomColor:"#888",
        borderBottomWidth: 2,
        borderBottomRightRadius: 20,
        paddingHorizontal: 15,

    },
    signInButtonContainerStyle: {
      flex: 0.3,
      marginTop: doubleBaseMargin,
      alignItems: "center",
      paddingHorizontal: baseMargin
    },
    signInButtonStyle: {
      width: 130,
      height: 50,
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: 130 / 4,
      alignItems: "center",
      backgroundColor: "#ccc",
      marginTop: 10
    },
    signInButtonTextStyle: {
      color: "black",
      textAlign: "center",
      alignSelf: "center",
      fontSize: 14,
      fontWeight: "bold",
      marginHorizontal: baseMargin
    },
    errorLabelContainerStyle: {
      flex: 0.1,
      alignItems: "center",
      justifyContent: "center"
    },
    errorTextStyle: {
      color: "red",
      textAlign: "center"
    },
    loginButtonContainerStyle: {
      flex: 0.2,
      paddingHorizontal: baseMargin,
      justifyContent: "center",
      alignItems: "center"
    },
    loginButtonStyle: {
      alignItems: "center"
    },
    loginButtonTextStyle: {
      color: blue
    },
    customIcon:{
        width: '85%',
        height: '90%',
    }
  });