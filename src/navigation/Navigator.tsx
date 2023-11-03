import React from 'react';
import { createStackNavigator, StackNavigationProp  } from '@react-navigation/stack';

import AuthScreen from '../screens/auth/Login';
import LoginStepTwo from '../screens/auth/LoginStepTwo';
import WelcomeScreen from '../screens/WelcomePage';
import DashboardScreen from '../screens/dashboard/Homepage';
import AuthHeader from '../components/Navbar/AuthHeader';


const AuthStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      header: () => <AuthHeader />
    }}>
      <AuthStack.Screen name="Login" component={AuthScreen} />
      <AuthStack.Screen name="LoginStepTwo" component={LoginStepTwo} />
    </AuthStack.Navigator>
  );
}

function DashboardStackNavigator() {
  return (
    <DashboardStack.Navigator  initialRouteName='Principal' screenOptions={{
      headerShown: false,
      header: () => <AuthHeader />
    }}>
      <DashboardStack.Screen name="Principal" component={WelcomeScreen} />
      <DashboardStack.Screen name="Homepage" component={DashboardScreen} />
    </DashboardStack.Navigator>
  );
}

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Auth" component={AuthStackNavigator} />
      <Stack.Screen name="Main" component={DashboardStackNavigator} />
    </Stack.Navigator>
  );
}


export default Navigator;
