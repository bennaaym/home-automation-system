import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
export  const AppButton = ({ textColor,onPress, title, color }) => {
    return (
      <TouchableOpacity
        style={{backgroundColor: `${color}`,padding: 10, margin: 7, borderRadius: 50}}
        onPress={onPress}
        color="#785412"
        >
        <Text style={{ fontSize: 15, color: `${textColor?textColor:'#ccc'}` }}>{title}</Text>
    </TouchableOpacity >      
    )

}

