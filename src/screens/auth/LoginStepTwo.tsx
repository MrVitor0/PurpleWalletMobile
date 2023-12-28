import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PWNextButton, PWBasicButton } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../navigation/Middleware';
import PPText from '../../components/Label/PPText';

const styles = StyleSheet.create({
  formForgotPassword: {
    fontSize: 10,
    textAlign: 'center',
    color: '#530F7D',
    marginBottom: 20,
  },
});

function Login() {
  const navigation = useNavigation();
  const { navigate } = useNavigation<StackNavigation>();
  const [password, setPassword] = useState('');

  const validatePasswordAndPassword = () => {
    if (password === '') {
     //Por favor, preencha o campo de senha
    } else {
      navigate('Dashboard' as never);
    }
  };
 

  return (
    <View style={AuthStyles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}
        style={AuthStyles.gradient}
      />
      <View style={AuthStyles.alignItems}>
        <PPText style={AuthStyles.formTitle}>
          Bem-vindo (a) de volta!
          {'\n'}
          Qual é a sua senha?
        </PPText>
        <PPText style={AuthStyles.formSubTitle}>
        Por favor, informe a sua senha para
        seguir com o login.
        </PPText>
        <TextInput
          style={AuthStyles.textInput}
          placeholder="***********"
          secureTextEntry={true}
          placeholderTextColor="#654678"
          onChangeText={(text) => setPassword(text)}
        />
        <PPText style={styles.formForgotPassword}  >
          Esqueceu sua senha? 
        </PPText>
      </View>
      <View style={AuthStyles.buttonContainer} >
          <PWNextButton color="#530F7D" size={40}  width={70} onPress={() => validatePasswordAndPassword()}>
           <PPText style={{ color: "#FFFFFF",fontSize: 18}}>Seguinte</PPText>
          </PWNextButton>
      </View>
    </View>
  );
}

export default Login;
