import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../components/DetailsScreen';
import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
      <Stack.Screen name="Principal" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
