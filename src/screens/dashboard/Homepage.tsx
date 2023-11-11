import React from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { PWBasicButton, PWBasicCard } from '../../components';
import { Entypo, MaterialCommunityIcons, Feather, MaterialIcons    } from '@expo/vector-icons'; 
import PPText, { PPTextRegular } from '../../components/Label/PPText';

const HomepageStyles = StyleSheet.create({
  flex: {
    flex: 1,
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
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  cardTitle: {
    fontSize: 12,
  },
  cardAmount: {
    fontSize: 25,
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.4)',
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
    marginLeft: 10, 
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
    padding: 25,
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  ctaButton: {
    marginTop: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
  },
});

function Homepage() {
  return (
    <View style={HomepageStyles.flex}>
      <View style={HomepageStyles.homepageFlex}>
        <PWBasicCard
          style={HomepageStyles.cardContainer}
          rounded={true}
          backgroundColor="#fff"
        >
        <View>
          <PPTextRegular style={HomepageStyles.cardTitle}>Saldo em Conta</PPTextRegular>
          <PPText style={HomepageStyles.cardAmount}>R$100,00</PPText>
          <PPTextRegular style={HomepageStyles.cardSubtitle}>R$250,00 em outros bancos</PPTextRegular>
        </View>
        <Entypo name="chevron-thin-right" size={30} color="#303030" />
      </PWBasicCard>
      
      {/* -- Slider Optionss Area */}
      <View style={HomepageStyles.optionsContainer}>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <MaterialCommunityIcons  name="bank" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Contas</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="credit-card" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Cartões</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Feather name="activity" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Investimentos</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <MaterialIcons name="local-attraction" size={30} color="#303030" />
              <PPTextRegular  style={HomepageStyles.optionsContentLabel}>Passeios</PPTextRegular>
            </View>
          </PWBasicCard>
        </View>

        {/* -- Credit Card Area */}
        <View style={HomepageStyles.creditCardContainer}>
          <ImageBackground 
            source={require('../../assets/cardbg4.png')}
            style={HomepageStyles.creditCardBackground}
          >
            <View style={HomepageStyles.creditCardTexts}>
              <PPText style={HomepageStyles.creditCardTitle}>R$ 250,00</PPText>
            </View>
            <PPText style={HomepageStyles.creditCardSubtitle}>Cartões de Crédito</PPText>
          </ImageBackground>
        </View>
        {/* -- PurpleWallet Call to Action */}
        <PWBasicCard
            style={HomepageStyles.ctaCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <PPTextRegular  style={HomepageStyles.ctaContentLabel}> <PPTextRegular style={{ color: '#581C87' }}>Convide amigos</PPTextRegular> para desbloquear recompensas incríveis.</PPTextRegular>
              <PWBasicButton textStyle={{ color: '#303030' }}  style={HomepageStyles.ctaButton} text={'Saiba Mais'} />
            </View>
          </PWBasicCard>

      </View>

    </View>
  );
}

export default Homepage;
