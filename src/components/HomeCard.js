import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const date = new Date().toLocaleDateString('en-us', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const HomeCard = () => {
  return (
    <TouchableOpacity style={styles.cardWrap}>
      <View style={styles.cardHeader}>
        <Text style={styles.nameText}>Hey Reddy,</Text>
        <Text style={styles.appText}>Debt Book</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.portText}>Total Worth:</Text>

        <Text style={styles.currency}>{'\u20B9'} 10,000/-</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.dateText}>{`${date}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: Colors.secondBack,
    color: Colors.background,
    marginHorizontal: 20,
    width: width * 0.92,
    borderRadius: 10,
    height: height / 4,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '20%',
  },
  nameText: {
    fontFamily: Font['poppins-bold'],
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.background,
  },
  appText: {
    fontFamily: Font['poppins-bold'],
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.background,
  },
  cardBody: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  portText: {
    fontFamily: Font['poppins-bold'],
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.background,
  },
  currency: {
    fontFamily: Font['poppins-bold'],
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.background,
  },
  cardFooter: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '20%',
  },
  dateText: {
    fontFamily: Font['poppins-bold'],
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.background,
  },
});

export default HomeCard;
