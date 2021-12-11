import React,{useState} from "react";
import { View,Text,SafeAreaView,TextInput,TouchableHighlight, Picker } from "react-native";
import __doCreateUser from '../../firebase/auth'
import {Icon} from 'react-native-elements'
import { AddUserToFireStore } from "./AddUserToFireStore ";
import { styles } from "../../styles/AddUserPageStyle";
import { RegisterMember } from "./RegisterMember";
export const AddUser = (props) => {
const [selectedValue, setSelectedValue] = useState("member");
const {navigation} = props;
   return(
    <SafeAreaView style={styles.containerStyle}>
    <View style={styles.headerContainerStyle}>
      <Text style={styles.headerTitleStyle}> Add a {selectedValue} </Text>
    </View>
    <View style={styles.ComponentContainerStyle}>
        <View style={styles.pickerContainer}>
            <Text style={{fontFamily: 'OpenSans-SemiBold',fontSize:17,color: "#2D7DD2"}}>Register new : </Text>
            <View style={styles.pickerTab}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Member" value="member" />
                    <Picker.Item label="Visitor" value="visitor" />
                </Picker>
            </View>
        </View>
        {(selectedValue == 'member')?<RegisterMember props={props}/>:<AddUserToFireStore visitor={true}/>}  
    </View>
  </SafeAreaView>

   ) 
  }