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
      headerContainerStyle: {
        height: '20%',
        paddingTop: 10,
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
        justifyContent: "center",
        alignContent:"center",
        height: '55%',
        borderWidth: 2,
        borderBottomColor: '#8CAD34',
        borderRightColor: '#8CAD34',
        borderBottomLeftRadius:8,
        borderTopRightRadius:8,
        marginTop: 50
      },
      ComponentContainerStyle:{
        paddingHorizontal: 25,
        paddingVertical:50,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,  
        borderTopRightRadius: 50,      
        justifyContent: "flex-start",
        height: '100%',
      },
      textInputStyle: {
        backgroundColor: "transparent",
        height: 50,
        fontSize: 14,
        width: '90%'
      },
      pickerContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        flex: 0.15,
      },
      pickerTab: {
          flexDirection: 'row',
          alignItems:'center',
          backgroundColor: '#D2D6DA',
          borderRadius:10,
          borderStyle:'solid',
          borderBottomColor:'#000',
          borderBottomWidth:1,
          borderRightWidth:1,
          width:150,
      },
      picker:{
            width:150,
            height:50,
            color: "#000",
            fontFamily: 'OpenSans-Regular',
            padding:16
      },
      InputContainer: {
          flexDirection: 'row',
          alignItems:"center",
          backgroundColor: "transparent",
          width: '100%',     
          justifyContent: "space-between",
          borderBottomColor:"#888",
          borderBottomWidth: 2,
          borderBottomRightRadius: 20,
          paddingHorizontal: 15,
      },
      signInButtonContainerStyle: {
        flex: 0.3,
        alignItems: "center",
        flexDirection: "row",
        justifyContent:"center",
        marginTop : 15
      },
      signInButtonStyle: {
        width: 120,
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
      cancelButtonStyle: {
        width: 120,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 130 / 4,
        alignItems: "center",
        backgroundColor: "#D1462F",
        marginTop: 10
      },
      cancelButtonTextStyle: {
        color: "#fff",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold",
        marginHorizontal: baseMargin
      },
      errorLabelContainerStyle: {
        alignItems: "center",
        justifyContent: "center",

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
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      }
})

export const AddPictureStyles = StyleSheet.create({
  container:{
    //backgroundColor: 'red',
    padding: 35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pictureContainer: {
    height: 270,
    width: 250,
    marginVertical: 30,
    borderRadius: 3,
    borderColor: "#001021",
    borderWidth: 1
  },
  chooseButton: {
    borderRadius:40,
    height:40,
    width: 120,
    padding:10,
    backgroundColor: '#2D7DD2'
  },
  uploadButton: {
    borderRadius:40,
    height:40,
    width: 120,
    padding:10,
    backgroundColor: '#82AC20'
  },
  chooseButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize:14
  }

}) 