import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { PWBasicButton } from '../components';
function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome1.png')}
        style={styles.backgroundImage}
      >
      
        <View style={styles.buttonContainer}>
          <PWBasicButton size='medium' rounded text="Começar" onPress={() => {}}  />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
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
    bottom: 0,
    width: '70%',
    marginBottom: 20,
  },
});

export default HomeScreen;