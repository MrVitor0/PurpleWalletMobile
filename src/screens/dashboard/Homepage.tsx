import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PWBasicCard } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';
import { Entypo } from '@expo/vector-icons'; 

const HomepageStyles = StyleSheet.create({
  homepageFlex: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  cardContainer: {
    width: '100%',
    height: '20%',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  cardTitle: {
    fontSize: 20,
  },
  cardAmount: {
    fontSize: 40,
    fontWeight: '400',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.4)',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os elementos quebrem para a próxima linha
    justifyContent: 'space-between',
  },
  optionsCardContainer: {
    flexBasis: '23%', // Largura base de 45% para cada card
    marginBottom: 5, 
    padding: .7,
  },
  optionsContentContainer: {
    alignItems: 'center',
  },
  optionsContentLabel: {
    paddingTop: 5,
    fontSize: 12,
  }
});

function Homepage() {
  return (
    <View style={AuthStyles.container}>
      <View style={HomepageStyles.homepageFlex}>
        <PWBasicCard
          style={HomepageStyles.cardContainer}
          rounded={true}
          backgroundColor="#fff"
        >
        <View>
          <Text style={HomepageStyles.cardTitle}>Conta</Text>
          <Text style={HomepageStyles.cardAmount}>R$100,00</Text>
          <Text style={HomepageStyles.cardSubtitle}>R$250,00 em outros bancos</Text>
        </View>
        <Entypo name="chevron-thin-right" size={30} color="#303030" />
      </PWBasicCard>


      <View style={HomepageStyles.optionsContainer}>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="chevron-thin-right" size={30} color="#303030" />
              <Text style={HomepageStyles.optionsContentLabel}>Contas Bancárias</Text>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="chevron-thin-right" size={30} color="#303030" />
              <Text style={HomepageStyles.optionsContentLabel}>Cartões de Crédito</Text>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="chevron-thin-right" size={30} color="#303030" />
              <Text style={HomepageStyles.optionsContentLabel}>Seus Investimentos</Text>
            </View>
          </PWBasicCard>
          <PWBasicCard
            style={HomepageStyles.optionsCardContainer}
            rounded={true}
            backgroundColor="#fff"
          >
            <View style={HomepageStyles.optionsContentContainer}>
              <Entypo name="chevron-thin-right" size={30} color="#303030" />
              <Text style={HomepageStyles.optionsContentLabel}>Controle de Gastos</Text>
            </View>
          </PWBasicCard>
        </View>
     
      </View>
    </View>
  );
}

export default Homepage;
