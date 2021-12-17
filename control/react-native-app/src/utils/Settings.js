import {  Icon,Button, withBadge } from 'react-native-elements';
import React,{useState} from 'react';
import { setModalVisible,setModalHidden } from '../redux/crud';
import { useDispatch } from 'react-redux';

export const Settings = () => {
    const dispatch = useDispatch()
    return (
            <Button icon={<Icon             
                    name="sliders-h"
                    type='font-awesome-5'
                    color='#1E152A'/>

                }  
                iconPosition='left'
                buttonStyle={{backgroundColor: '#fff',paddingRight:15}}   
                onPress={()=>{setModalVisible(dispatch)}}    
            /> 
    )
}

