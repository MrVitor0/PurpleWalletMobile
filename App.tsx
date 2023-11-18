import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text } from 'react-native';
import * as Font from 'expo-font';
import PPFonts from './src/styles/PPFont';
import PPText from './src/components/Label/PPText';
import LoadingScreen from './src/screens/LoadingScreen';


export default class App extends Component {
  state = {
    isFontLoaded: false,
  };

  async componentDidMount() {
    await PPFonts();
    this.setState({ isFontLoaded: true });
    
    await NavigationBar.setPositionAsync("absolute");
    await NavigationBar.setBackgroundColorAsync("#ffffff01");
  }
  
  render() {
    if (!this.state.isFontLoaded) {
      return (
        <NavigationContainer>
          <LoadingScreen />
        </NavigationContainer>
      );
    }
  
    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Navigator />
      </NavigationContainer>
    );
  }
  
}
