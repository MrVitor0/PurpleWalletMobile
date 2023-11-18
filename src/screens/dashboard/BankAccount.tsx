import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { PWBasicButton, PWBasicCard } from '../../components';
import { MaterialCommunityIcons, Fontisto  } from '@expo/vector-icons'; 
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
  },
  cardInnerContainer: {
    width: '100%',
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
  return (
    <ScrollView> 
    <View style={HomepageStyles.flex}>
      <View style={HomepageStyles.homepageFlex}>
        <PWBasicCard
          style={HomepageStyles.cardContainer}
          containerStyle={HomepageStyles.cardInnerContainer}
          rounded={true}
          backgroundColor="#fff"
        >
        <View>
          <PPTextRegular style={HomepageStyles.cardTitle}>Saldo em Conta</PPTextRegular>
          <PPText style={HomepageStyles.cardAmount}>R$100,00</PPText>
          <PPTextRegular style={HomepageStyles.cardSubtitle}>R$250,00 em outros bancos</PPTextRegular>
        </View>
      </PWBasicCard>
      
      {/* -- Slider Optionss Area */}
      <View style={HomepageStyles.optionsContainer}>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Fontisto name="shopping-basket-add" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Adicionar</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
            <Fontisto name="shopping-basket-remove" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Remover</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <MaterialCommunityIcons name="calendar-import" size={30} color="#303030" />
              <PPTextRegular style={HomepageStyles.optionsContentLabel}>Importar Extrato</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
            <MaterialCommunityIcons name="help-circle-outline" size={30} color="black" />
              <PPTextRegular  style={HomepageStyles.optionsContentLabel}>Ajuda</PPTextRegular>
            </View>
          </PWBasicCard>
        </View>

      </View>
    </View>
    </ScrollView>
  );
}

export default Homepage;
