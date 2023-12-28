import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PWBasicButton from '../Button/PWBasicButton';
import { DashboardHeaderStyles, AuthStyles } from '../../styles/sharedStyles';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { PPTextRegular } from '../Label/PPText';


const DashboardHeader = () => {
  return (
    <View style={DashboardHeaderStyles.headerContainer}>
      <View style={DashboardHeaderStyles.userArea}>
        <Image
          style={DashboardHeaderStyles.userPicture}
          source={require('../../assets/userpopup.png')}
        />
        <PPTextRegular style={DashboardHeaderStyles.userNameLabel}>Olá, <PPTextRegular style={{ color:  '#530F7D', fontWeight: 'bold'}}>Vitor</PPTextRegular> </PPTextRegular>
      </View>
      <View style={DashboardHeaderStyles.buttonContainer}>
        <SimpleLineIcons name="menu" style={DashboardHeaderStyles.iconStyle} size={24} color="#654678" />
      </View>
    </View>
  );
};

export default DashboardHeader;
