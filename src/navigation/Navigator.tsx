import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthScreen from '../screens/auth/Login';
import LoginStepTwo from '../screens/auth/LoginStepTwo';
import WelcomeScreen from '../screens/WelcomePage';
import HomepageScreen from '../screens/dashboard/Homepage';
import AuthHeader from '../components/Navbar/AuthHeader';
import DashboardHeader from '../components/Navbar/DashboardHeader';
import BankAccountScreen from '../screens/dashboard/BankAccount';
//Other navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/Navbar/CustomTabBar';
const Tab = createBottomTabNavigator();

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
    <Tab.Navigator  
      initialRouteName="Homepage" 
      screenOptions={{ 
        header: () => <DashboardHeader />,
      }} 
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Homepage" component={HomepageScreen} />
      <Tab.Screen name="BankAccount" component={BankAccountScreen} />
    </Tab.Navigator>
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


export default Navigator;
