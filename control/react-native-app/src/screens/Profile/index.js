
import React from 'react';
import {View, Text} from 'react-native';

const Profile = props => {
  console.log(props);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;