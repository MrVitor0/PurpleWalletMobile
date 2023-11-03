import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  //Transparent navigation bar
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setBackgroundColorAsync("#ffffff01");
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Navigator />
    </NavigationContainer>
  );
}
