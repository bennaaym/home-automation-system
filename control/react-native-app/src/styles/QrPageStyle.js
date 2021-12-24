import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      height: '75%',
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    titleStyle: {
      fontSize: 17,
      fontFamily: 'Montserrat-Regular',
      textAlign: 'center',
      margin: 10,
    },
    textStyle: {
      textAlign: 'center',
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#51D8C7',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#51D8C7',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 30,
      padding: 10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      fontFamily: 'Montserrat-Regular',
      paddingVertical: 10,
      paddingHorizontal:10,
      fontSize: 16,
    },
    backButtonStyle: {
      backgroundColor: '#D1462F',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#51D8C7',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: 10,
      padding: 10,   
    }
  });

  export const headerStyles = StyleSheet.create({

    containerStyle: {
        paddingTop: 30,
        flexDirection: "column",
        justifyContent: "space-between", 
        backgroundColor:"#E0E0E0" 
      },
      headerContainerStyle: {
        height: '25%',
        paddingTop: 10,
        alignItems: "center",
        justifyContent:'space-evenly'
        
      },
      headerTitleStyle: {
          color: "#8CAD34",
          fontSize: 30,
          textAlign: "center",
          fontFamily: 'OpenSans-SemiBold',
        },
})