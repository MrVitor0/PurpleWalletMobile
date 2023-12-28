import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View,  TextInput  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthStyles } from '../../styles/sharedStyles';
import { PWNextButton, PWBasicButton } from '../../components';
import { StackNavigation } from '../../navigation/Middleware';
import PPText from '../../components/Label/PPText';
function Login() {
  const { navigate } = useNavigation<StackNavigation>();
  const [email, setEmail] = useState('');

  const validateUserEmailAndGo = () => {
    if (email === '') {
    } else {
      navigate('LoginStepTwo' as never);
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
          Bem-Vindo(a) ao PurpleWallet!
          {'\n'}
          Qual é o seu e-mail?
        </PPText>
        <PPText style={AuthStyles.formSubTitle}>
          Iremos precisar de algumas informações para realizar o seu cadastro ou acessar o aplicativo.
        </PPText>
        <TextInput
          style={AuthStyles.textInput}
          placeholder="John@doe.com"
          placeholderTextColor="#949494rawfa2412541"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={AuthStyles.buttonContainer} >
          <PWNextButton color="#530F7D" size={40}  width={70} onPress={() => validateUserEmailAndGo()}>
           <PPText style={{ color: "#FFFFFF",fontSize: 18}}>Seguinte</PPText>
          </PWNextButton>
      </View>
    </View>
  );
}

export default Login;
