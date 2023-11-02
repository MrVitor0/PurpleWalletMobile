import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PWNextButton, PWBasicButton } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';


function Homepage() {
  const navigation = useNavigation();
 

  const goBack = () => {
    navigation.goBack();
  };
 

  return (
    <View style={AuthStyles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']}
        style={AuthStyles.gradient}
      />
      <View style={AuthStyles.buttonGroupContainer}>
        <View style={AuthStyles.topLeftButtonContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            color="#303030"
            size={20}
            onPress={() => goBack()}
          />
        </View>
        <View style={AuthStyles.topRightButtonContainer}>
          <PWBasicButton
            style={AuthStyles.buttonCornerTopRight}
            textStyle={AuthStyles.textCornerTopStyle}
            text="Português"
            rounded
            color="#fff"
            textColor="#303030"
            onPress={() => {}}
          />
        </View>
      </View>
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
