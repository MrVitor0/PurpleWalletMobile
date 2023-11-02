import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PWNextButton, PWBasicButton } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';

const styles = StyleSheet.create({
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
        <PWNextButton color="#A244FF" size={80} onPress={() => validatePasswordAndPassword()}>
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
          Bem-vindo (a) de volta João!
          {'\n'}
          Qual é a sua senha?
        </Text>
        <Text style={AuthStyles.formSubTitle}>
        Encontramos o seu cadastro, porém, por questões de segurança, precisamos confirmar a sua identidade. Por favor, digite a sua senha.
        </Text>
        <TextInput
          style={AuthStyles.textInput}
          placeholder="*******"
          secureTextEntry={true}
          placeholderTextColor="#303030"
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.formForgotPassword}  >
          Esqueceu a sua senha? Clique aqui
        </Text>
      </View>
    </View>
  );
}

export default Login;
