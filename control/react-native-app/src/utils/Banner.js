import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BannerStyles } from "../styles/HeaderStyle";


const Banner = ({title,description}) => {
    return(
        <View style={BannerStyles.container}>
            <Text style={BannerStyles.title}> {title} </Text>
            <Text style={BannerStyles.description}> {description} </Text>
        </View>       
    )
}

export default Banner
