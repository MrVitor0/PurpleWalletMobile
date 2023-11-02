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
          <PWBasicButton size='small' text="Pressione" onPress={() => {}}  />
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
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default HomeScreen;