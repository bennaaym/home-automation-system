import {  Icon,Button, withBadge } from 'react-native-elements';
import React from 'react';

export const Settings = () => {
    return (
        <Button icon={<Icon             
                name="sliders-h"
                type='font-awesome-5'
                color='#1E152A'/>

            }  
            iconPosition='left'
            buttonStyle={{backgroundColor: '#fff',paddingRight:15}}       
        /> 
    )
}