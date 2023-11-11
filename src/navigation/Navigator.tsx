import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../screens/auth/Login';
import LoginStepTwo from '../screens/auth/LoginStepTwo';
import WelcomeScreen from '../screens/WelcomePage';
import DashboardScreen from '../screens/dashboard/Homepage';
import AuthHeader from '../components/Navbar/AuthHeader';
import DashboardHeader from '../components/Navbar/DashboardHeader';

const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ApplicationStack = createStackNavigator();
const Stack = createStackNavigator();


function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{
      header: () => <AuthHeader />
    }}>
      <AuthStack.Screen name="Login" component={AuthScreen} />
      <AuthStack.Screen name="LoginStepTwo" component={LoginStepTwo} />
    </AuthStack.Navigator>
  );
}

function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator  screenOptions={{
      header: () => <DashboardHeader />
    }}>
      <DashboardStack.Screen name="Homepage" component={DashboardScreen} />
    </DashboardStack.Navigator>
  );
}

function ApplicationStackNavigator() {
  return (
    <ApplicationStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <ApplicationStack.Screen name="WelcomePage" component={WelcomeScreen} />
    </ApplicationStack.Navigator>
  );
}

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Application" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Application" component={ApplicationStackNavigator} />
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Dashboard" component={DashboardStackNavigator} />
    </Stack.Navigator>
  );
}


export default DashboardStackNavigator;
