import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { PWBasicCard } from '../../components';
import { AuthStyles } from '../../styles/sharedStyles';

const HomepageStyles = StyleSheet.create({
  homepageFlex: {
    flex: 1,
    top: 100,
    marginHorizontal: 10,
  },
  cardContainer: {
    width: '100%',
    height: '20%',
    padding: 10,
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
  cardIcon: {
    color: 'black',
    fontSize: 40,
  },
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
          <Feather 
            style={HomepageStyles.cardIcon}
            name="chevrons-right"
          />
        </PWBasicCard>
      </View>
    </View>
  );
}

export default Homepage;
