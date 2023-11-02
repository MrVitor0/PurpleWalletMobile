import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/Login';
import LoginStepTwo from '../screens/auth/LoginStepTwo';
import HomeScreen from '../screens/WelcomePage';
import Dashboard from '../screens/dashboard/Homepage';
const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Principal" 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Principal" component={HomeScreen} />
      <Stack.Screen name="LoginStepTwo" component={LoginStepTwo} />


      {/* Dashboard */}
      <Stack.Screen name="Homepage" component={Dashboard} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
