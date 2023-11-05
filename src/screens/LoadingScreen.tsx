import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../navigation/Middleware';

function WelcomePage() {
  const { navigate } = useNavigation<StackNavigation>();
  const goToLogin = () => {
    navigate("Auth");
  }
  return (
    <View style={styles.container}>
      <View
        style={styles.backgroundImage}
      >
      </View>
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
    textAlign: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    backgroundColor: '#581C87',
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
    paddingHorizontal: 6,
    width: '100%',
    marginBottom: 40,
  },
  buttonStyle: {
    width: '70%',
  },
});

export default WelcomePage;