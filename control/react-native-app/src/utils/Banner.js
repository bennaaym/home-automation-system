import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { BannerStyles } from "../styles/HeaderStyle";
import { ProfileAvatar } from "./ProfileAvatar";



const Banner = ({title,description}) => {
    return(
        <View style={BannerStyles.container}>
            <View>
                <Text style={BannerStyles.title}> {title} </Text>
                <Text style={BannerStyles.description}> {description} </Text>
            </View>
            <View>
               
            </View>
        </View>       
    )
}

export default Banner
