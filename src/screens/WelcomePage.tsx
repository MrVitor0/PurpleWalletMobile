import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { PWBasicButton } from '../components';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome1.png')}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        <View style={styles.buttonContainer} >
          <Text style={styles.welcomeMessage}>A simplicidade financeira leva ao sucesso financeiro.</Text>
          <PWBasicButton style={styles.buttonStyle} size='medium' rounded text="Começar" onPress={() => {}}  />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeMessage: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'left',
    fontWeight: 'bold',
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
    height: '50%',
  },
  buttonContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    paddingHorizontal: 5,
    width: '100%',
    marginBottom: 40,
  },
  buttonStyle: {
    width: '70%',
  },
});

export default HomeScreen;