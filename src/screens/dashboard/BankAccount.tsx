import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { PWBasicButton, PWBasicCard, PWBasicTable } from '../../components';
import { MaterialCommunityIcons, Fontisto  } from '@expo/vector-icons'; 
import PPText, { PPTextRegular } from '../../components/Label/PPText';

const bankAccountStyles = StyleSheet.create({
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
  historyContainer: {
    width: '100%',
    height: '100%',
  }, 
  historyItem: {
    width: '100%',
    marginBottom: 10,
  },
 
});

function Homepage() {
  return (
    <ScrollView> 
    <View style={bankAccountStyles.flex}>
      <View style={bankAccountStyles.homepageFlex}>
        <PWBasicCard
          style={bankAccountStyles.cardContainer}
          containerStyle={bankAccountStyles.cardInnerContainer}
          rounded={true}
          backgroundColor="#fff"
        >
        <View>
          <PPTextRegular style={bankAccountStyles.cardTitle}>Saldo em Conta</PPTextRegular>
          <PPText style={bankAccountStyles.cardAmount}>R$100,00</PPText>
          <PPTextRegular style={bankAccountStyles.cardSubtitle}>R$250,00 em outros bancos</PPTextRegular>
        </View>
      </PWBasicCard>
      
      {/* -- Slider Optionss Area */}
      <View style={bankAccountStyles.optionsContainer}>
          <PWBasicCard
            style={bankAccountStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={bankAccountStyles.optionsContentContainer}>
              <Fontisto name="shopping-basket-add" size={30} color="#303030" />
              <PPTextRegular style={bankAccountStyles.optionsContentLabel}>Adicionar</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={bankAccountStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={bankAccountStyles.optionsContentContainer}>
            <Fontisto name="shopping-basket-remove" size={30} color="#303030" />
              <PPTextRegular style={bankAccountStyles.optionsContentLabel}>Remover</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={bankAccountStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={bankAccountStyles.optionsContentContainer}>
              <MaterialCommunityIcons name="calendar-import" size={30} color="#303030" />
              <PPTextRegular style={bankAccountStyles.optionsContentLabel}>Importar Extrato</PPTextRegular>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={bankAccountStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={bankAccountStyles.optionsContentContainer}>
            <MaterialCommunityIcons name="help-circle-outline" size={30} color="black" />
              <PPTextRegular  style={bankAccountStyles.optionsContentLabel}>Ajuda</PPTextRegular>
            </View>
          </PWBasicCard>
      </View>
      {/* -- History Area */}
      <View>
        <PWBasicTable
              style={[bankAccountStyles.historyContainer, {marginTop: 20}]}
              rounded={true}
              backgroundColor="#fff"
            >
              
          <PWBasicCard
            style={bankAccountStyles.historyItem}
            rounded={true}
            backgroundColor="#F4F4F4"
          >
              <PPTextRegular style={bankAccountStyles.ctaContentLabel}>Últimas Transações</PPTextRegular>
          </PWBasicCard>

          <PWBasicCard
            style={bankAccountStyles.historyItem}
            rounded={true}
            backgroundColor="#F4F4F4"
          >
              <PPTextRegular style={bankAccountStyles.ctaContentLabel}>Últimas Transações</PPTextRegular>
          </PWBasicCard>

        </PWBasicTable>
      </View>

      </View>
    </View>
    </ScrollView>
  );
}

export default Homepage;
