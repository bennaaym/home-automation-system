import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import { AddUser } from '../screens/AddUser';
import { ProfileAvatar } from '../utils/ProfileAvatar';
import Room from '../screens/Room';
import { Settings } from '../utils/Settings';
import { QrPage } from '../screens/QRPage';


const Stack = createStackNavigator();

const AppNavigationContainer = ({username}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerTitle: (props) => <ProfileAvatar {...props} />,headerRight: (props) => <Settings {...props} />}} name="Home" component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name="AddUser" component={AddUser} />
        <Stack.Screen options={{headerShown: false}} name="QrCode" component={QrPage} />
        <Stack.Screen options={{headerTitle: "" ,headerRight: (props) => <Settings {...props} />}} name="Room" component={Room} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;