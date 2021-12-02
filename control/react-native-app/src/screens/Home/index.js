import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import RoomWidget from '../../components/RoomWidget'
import{ styles }from '../../styles/HomeStyle';
import Banner from '../../utils/Banner';

const channelNo = "1580471";
const apiWriteKey = "E1IEL3E8446RN0I8";
const username = "hajer"
const Home = (props) =>{
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Banner title={`Hello ${username} !`} description={"let's manage your smart home "}/>
        <View style={styles.roomContainer}>
          <RoomWidget name="kitchen" lampNo="1" windowNo="1" color="red" icon="utensils"/>
          <RoomWidget name="Living Room" lampNo="2" color="#007bff" icon="couch"/>
          <RoomWidget name="Living Room" lampNo="2" color="#007bff" icon="bath"/>
          <RoomWidget name="Living Room" lampNo="2" color="#007bff"/>
        </View>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Home

