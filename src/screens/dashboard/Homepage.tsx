import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PWNextButton, PWBasicButton } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';

function Homepage() {
  const navigation = useNavigation();
 

  return (
    <View style={AuthStyles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']}
        style={AuthStyles.gradient}
      />
      <View style={AuthStyles.centerTextContainer}>
        <Text style={AuthStyles.formTitle}>
          Homepage Sample
          {'\n'}
          Qual é a sua senha?
        </Text>
      </View>
    </View>
  );
}

export default Homepage;
