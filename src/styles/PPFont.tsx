import * as Font from 'expo-font';

// Substitua 'SuaFonte-Regular' e 'SuaFonte-Bold' pelos nomes dos arquivos de fonte
export default async () => {
  return await Font.loadAsync({
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
};
