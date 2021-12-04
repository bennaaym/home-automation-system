import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import { HeaderStyles } from '../styles/HeaderStyle';
import { ProfileAvatar } from '../utils/ProfileAvatar';
import Room from '../screens/Room';
import { Settings } from '../utils/Settings';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerTitle: (props) => <ProfileAvatar {...props} />,headerRight: (props) => <Settings {...props} />}} name="Home" component={HomeScreen}/>
        <Stack.Screen options={{headerTitle: "" ,headerRight: (props) => <Settings {...props} />}} name="Room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;