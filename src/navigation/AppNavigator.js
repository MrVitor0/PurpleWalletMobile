import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/WelcomePage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
      <Stack.Screen name="Principal" 
        options={{
            headerShown: false, // Hide the header bar
        }} 
      component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
