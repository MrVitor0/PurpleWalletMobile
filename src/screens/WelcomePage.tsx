import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { PWBasicButton } from '../components';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/Middleware';
import PPText from '../components/Label/PPText';

function WelcomePage() {
  const { navigate } = useNavigation<StackNavigation>();
  const goToLogin = () => {
    navigate("Auth");
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/welcome1.png')} style={styles.backgroundImage} />
      <View style={styles.gradientContainer}>
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
          <View style={styles.buttonContainer} >
            <PPText style={styles.welcomeMessage}>A simplicidade financeira leva ao sucesso financeiro</PPText>
            <PWBasicButton style={styles.buttonStyle} size='medium' rounded text="Começar" onPress={() => goToLogin()}  />
          </View>
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  welcomeMessage: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '60%',
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 80,
  },
  buttonStyle: {
    width: '70%',
  },
});

export default WelcomePage;