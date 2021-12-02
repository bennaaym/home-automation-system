import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import { HeaderStyles } from '../styles/HeaderStyle';
import { ProfileAvatar } from '../utils/ProfileAvatar';


const Stack = createStackNavigator();

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerTitle: "Smart Home app",headerTitleStyle:{...HeaderStyles.title}, headerRight: (props) => <ProfileAvatar {...props} />}} name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;