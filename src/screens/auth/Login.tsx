import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthStyles } from '../../styles/sharedStyles';
import { PWNextButton, PWBasicButton } from '../../components';



function Login() {
  const navigation = useNavigation();
 
  const [email, setEmail] = useState('');

  const validateUserEmailAndGo = () => {
    if (email === '') {
     //Por favor, preencha o campo de e-mail
    } else {
      navigation.navigate('LoginStepTwo' as never);
    }
  };
  const goToLogin = () => {
    navigation.navigate('Login' as never);
  };
  const goBack = () => {
    navigation.goBack();
  };
 

  return (
    <View style={AuthStyles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
        style={AuthStyles.gradient}
      />
      <View style={AuthStyles.buttonContainer}>
        <PWNextButton color="#A244FF" size={80} onPress={() => validateUserEmailAndGo()}>
          <MaterialCommunityIcons
            name="account-arrow-right-outline"
            color={AuthStyles.buttonIcon.color}
            size={AuthStyles.buttonIcon.size}
          />
        </PWNextButton>
      </View>
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
          Boas-vindas ao PurpleWallet!
          {'\n'}
          Qual é o seu e-mail?
        </Text>
        <Text style={AuthStyles.formSubTitle}>
          Iremos precisar de algumas informações para realizar o seu cadastro ou acessar o aplicativo
        </Text>
        <TextInput
          style={AuthStyles.textInput}
          placeholder="John@doe.com"
          placeholderTextColor="#303030"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
    </View>
  );
}

export default Login;
