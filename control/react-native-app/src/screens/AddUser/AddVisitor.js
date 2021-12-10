import React from "react";
import { Text, View } from "react-native";
import auth from '@react-native-firebase/auth'
import { useSelector,useDispatch } from 'react-redux';

export const AddVisitor = () => {
    const uid = useSelector(state => state.userReducer.uid)
    return (
        <View>
            <Text>visitor Page</Text>
            <Text>{uid}</Text>
        </View>
    )
}