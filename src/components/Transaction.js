import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';
import Spacing from '../assets/constants/Spacing';

const Transaction = ({date, balance, debit, trStyle}) => {
  return (
    <TouchableOpacity style={[trStyle, styles.transactionCard]} disabled={true}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.amtText}>
        {'\u20B9'} {balance} {debit === true ? 'Dr' : 'Cr'}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  transactionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
  },
  amtText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
  },
});

export default Transaction;
