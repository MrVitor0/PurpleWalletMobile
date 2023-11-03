import React from 'react';
import { StackNavigationProp  } from '@react-navigation/stack';

export type ScreenNames = ["Dashboard", "Auth"] 
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = StackNavigationProp<RootStackParamList>;