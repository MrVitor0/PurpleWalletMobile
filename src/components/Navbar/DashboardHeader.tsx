import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PWBasicButton from '../Button/PWBasicButton';
import { DashboardHeaderStyles, AuthStyles } from '../../styles/sharedStyles';
import { SimpleLineIcons } from '@expo/vector-icons'; 


const DashboardHeader = () => {
  return (
    <View style={DashboardHeaderStyles.headerContainer}>
      <View style={DashboardHeaderStyles.userArea}>
        <Image
          style={DashboardHeaderStyles.userPicture}
          source={require('../../assets/userpopup.png')}
        />
        <Text style={DashboardHeaderStyles.userNameLabel}>Olá, Vitor</Text>
      </View>
      <View style={DashboardHeaderStyles.buttonContainer}>
        <SimpleLineIcons name="settings" style={DashboardHeaderStyles.iconStyle} size={24} color="#fff" />
        <SimpleLineIcons name="question" style={DashboardHeaderStyles.iconStyle} size={24} color="#fff" />
        <PWBasicButton 
        size='small'
            style={AuthStyles.buttonCornerTopRight}
            textStyle={AuthStyles.textCornerTopStyle}
            text="Outubro/23"
            rounded
            color="#fff"
            textColor="#303030"
        />
      </View>
    </View>
  );
};

export default DashboardHeader;
