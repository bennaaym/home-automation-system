import {  Icon,Button, withBadge } from 'react-native-elements';
import { Modal,View,StyleSheet,Text,Pressable,TouchableHighlight } from 'react-native';
import React,{useState} from 'react';
import { styles } from '../styles/ModalStyle';
import { useSelector,useDispatch } from 'react-redux';
import { setModalVisible,setModalHidden } from '../redux/crud';
import { doSignOut } from '../firebase/auth';
import auth from '@react-native-firebase/auth'
import { getUserRoleByUid } from '../firebase/actions/dbActions';
 
export const SettingsModal = ({props}) => {
   const isOpen = useSelector(state => state.modalReducer.modalVisible)
   const uid = auth().currentUser.uid
   const Admin = getUserRoleByUid(uid)
   const {navigation} = props;
   const dispatch = useDispatch();
   return (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={() => {
                    setModalHidden(dispatch);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}> 
                    <Button icon={<Icon             
                    name="times"
                    type='font-awesome-5'
                    color='#161B33'/>                
                        } 
                        iconPosition='left'            
                        buttonStyle={{backgroundColor: 'transparent',paddingRight:15,borderRadius: 20,alignSelf:"flex-end"}}   
                        onPress={() => setModalHidden(dispatch)}    
                    />              
                    <View style={styles.modalViewContainer}>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalHidden(dispatch);navigation.navigate('QrCode')}}
                            >
                            <Text style={styles.textStyle}>QR Code</Text>
                          </Pressable>
                          {(Admin == true)?(<Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalHidden(dispatch);navigation.navigate('AddUser')}}
                            >
                            <Text style={styles.textStyle}>Add Users</Text>
                          </Pressable>):null}
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalHidden(dispatch);doSignOut()}}
                            >
                            <Text style={styles.textStyle}>Logout</Text>
                          </Pressable>
                     </View>
                    </View>
                    </View>
                </Modal>

   )

}
 
