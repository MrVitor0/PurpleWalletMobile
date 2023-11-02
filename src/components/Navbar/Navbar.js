import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavBar() {
  const navigation = useNavigation();

  const onClick = () => {
    alert('Hello');
    navigation.navigate('Detalhes');
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
        <Text>Tela Principal 1 </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Detalhes')}>
        <Text>Tela de Detalhes 1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavBar;
