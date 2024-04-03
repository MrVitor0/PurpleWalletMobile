import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { PWBasicButton, PWBasicCard } from '../../components';
import { Entypo, MaterialCommunityIcons, Feather, MaterialIcons    } from '@expo/vector-icons'; 
import { PPTextRegular } from '../../components/Label/PPText';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../navigation/Middleware';

const HomepageStyles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  homepageFlex: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 20,
  },
  cardContainer: {
    width: '100%',
    height: 130,
    padding: 25,
  },
  cardInnerContainer: {
    width: '100%',
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  cardTitle: {
    fontSize: 15,
    color: '#654678',
  },
  cardAmount: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#530F7D',
  },
  cardSubtitle: {
    fontSize: 13,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
    width: '80%',
    height: 30,
    color: '#654678',
    marginTop: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os elementos quebrem para a próxima linha
    justifyContent: 'space-between',
    marginTop: 20
  },
  optionsCardContainer: {
    flexBasis: '23%', // Largura base de 45% para cada card
  },
  optionsContentContainer: {
    alignItems: 'center',
  },
  ctaContentContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  optionsContentLabel: {
    paddingTop: 5,
    fontSize: 8,
  },
  creditCardContainer: {
    width: '100%',
    marginTop: 20,
    height: 200,
  },
  creditCardBackground: {
    flex: 1, 
    width: '100%', 
    height: '100%', 
    borderRadius: 15, 
    overflow: 'hidden'
  },
  creditCardTitle: {
    fontSize: 32, 
    color: '#fff'
  },
  creditCardSubtitle: {
    fontSize: 16, 
    color: '#fff', 
    marginLeft: 15, 
    marginBottom: 10
  },
  creditCardTexts: {
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: 20, 
    marginLeft: 10
  },
  ctaContentLabel: {
    fontSize: 15,
    textAlign: 'left',
  },
  ctaCardContainer: {
    width: '100%',
    height: 130,
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginVertical: 20,
  },
  expansesCardContainer: {
    width: '100%',
    height: 130,
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  ctaButton: {
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
  expansesGraphContainer: {
    textAlign: 'center',
    
    marginHorizontal: 20,
    flex: 1,
  },
  expanseContentLabel: {
    fontSize: 15,
    textAlign: 'left',
  },
});


function Homepage() {
  const { navigate } = useNavigation<StackNavigation>();
  const goToBankAccount = () => {
    navigate('BankAccount');
  }
  return (
   
    <View style={HomepageStyles.flex}>
      <ScrollView> 
      <View style={HomepageStyles.homepageFlex}>
        <PWBasicCard
          style={HomepageStyles.cardContainer}
          containerStyle={HomepageStyles.cardInnerContainer}
          rounded={true}
          backgroundColor="#EBEBEB"
        >
        <View >
          <PPTextRegular style={HomepageStyles.cardTitle}>Saldo total nos seus bancos</PPTextRegular>
          <PPTextRegular style={HomepageStyles.cardAmount}>R$100,00</PPTextRegular>
          <PWBasicButton  onPress={goToBankAccount} textStyle={{ color: '#654678' }}  style={HomepageStyles.cardSubtitle} text={'Ver Detalhadamente'} />
        </View>
      </PWBasicCard>
      {/* -- Slider Optionss Area */}
      <View style={HomepageStyles.optionsContainer}>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#EBEBEB"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <MaterialCommunityIcons  name="bank" size={30} color="#530F7D" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Open Finance</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#EBEBEB"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="credit-card" size={30} color="#530F7D" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Cartões</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#EBEBEB"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <MaterialCommunityIcons name="piggy-bank" size={30} color="#530F7D" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Dividir Contas</PPTextRegular>
            </View>
          </PWBasicCard>
          {/* Empty Card */}
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#EBEBEB"
          >
          </PWBasicCard>
        </View>

        {/* -- Credit Card Area */}
        <View style={HomepageStyles.creditCardContainer}>
          <ImageBackground 
            source={require('../../assets/cardbg4.png')}
            style={HomepageStyles.creditCardBackground}
          >
            <View style={HomepageStyles.creditCardTexts}>
              <PPTextRegular style={HomepageStyles.creditCardTitle}>R$1.674,98</PPTextRegular>
            </View>
            <PPTextRegular style={HomepageStyles.creditCardSubtitle}>Vitor Hugo B.</PPTextRegular>
          </ImageBackground>
        </View>
        {/* -- PurpleWallet Call to Action */}
        <PWBasicCard
            style={HomepageStyles.ctaCardContainer}
            rounded={true}
            backgroundColor="#EBEBEA"
          >
            <View style={HomepageStyles.ctaContentContainer}>
              <PPTextRegular  style={HomepageStyles.ctaContentLabel}> <PPTextRegular style={{ color: '#581C87' }}>Convide amigos</PPTextRegular> para desbloquear recompensas incríveis.</PPTextRegular>
              <PWBasicButton textStyle={{ color: '#303030' }}  style={HomepageStyles.ctaButton} text={'Saiba Mais'} />
            </View>
        </PWBasicCard>
        
      </View>
      </ScrollView>
    </View>
  
  );
}

export default Homepage;
