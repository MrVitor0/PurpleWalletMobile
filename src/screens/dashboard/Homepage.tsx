import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PWNextButton, PWBasicButton } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: 60,
    marginRight: 20,
  },
  buttonGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  topLeftButtonContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    marginTop: 60,
  },
  topRightButtonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginTop: 60,
  },
  centerTextContainer: {
    flex: 1,
    top: 100,
    margin: 20,
  },
  buttonCornerTopRight: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCornerTopStyle: {
    fontSize: 12,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  formSubTitle: {
    fontSize: 10,
    textAlign: 'left',
    color: '#303030',
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(48, 48, 48, 0.2)',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonIcon: {
    color: 'white',
    size: 40,
  },

  formForgotPassword: {
    fontSize: 10,
    textAlign: 'left',
    color: 'rgba(48, 48, 48, 0.7)',
    marginBottom: 20,
  },
});

function Login() {
  const navigation = useNavigation();
 
  const [password, setPassword] = useState('');

  const validatePasswordAndPassword = () => {
    if (password === '') {
     //Por favor, preencha o campo de senha
    } else {
      navigation.navigate('Homepage' as never);
    }
  };
  const goToLogin = () => {
    navigation.navigate('Login' as never);
  };
  const goBack = () => {
    navigation.goBack();
  };
 

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)']}
        style={styles.gradient}
      />
      <View style={styles.buttonGroupContainer}>
        <View style={styles.topLeftButtonContainer}>
          <MaterialCommunityIcons
            name="arrow-left"
            color="#303030"
            size={20}
            onPress={() => goBack()}
          />
        </View>
        <View style={styles.topRightButtonContainer}>
          <PWBasicButton
            style={styles.buttonCornerTopRight}
            textStyle={styles.textCornerTopStyle}
            text="Português"
            rounded
            color="#fff"
            textColor="#303030"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.centerTextContainer}>
        <Text style={styles.formTitle}>
          Homepage Sample
          {'\n'}
          Qual é a sua senha?
        </Text>
      </View>
    </View>
  );
}

export default Login;
