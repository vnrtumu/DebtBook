import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';

const width = Dimensions.get('window').width;

const AccountCard = ({title, icon, style, balance, disabledBtn, cardStyle}) => {
  return (
    <TouchableOpacity
      style={[cardStyle, styles.accCard]}
      disabled={disabledBtn}>
      <Text style={styles.cardHeaderText}>{title}</Text>
      <View style={styles.content}>
        <Icon
          name={icon}
          size={20}
          color={Colors.secondBack}
          style={styles.iconStyle}
        />
        <Text style={styles.amtStyle}>
          {'\u20B9'} {balance}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  accCard: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 10,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    marginBottom: 10,
    color: Colors.secondBack,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconStyle: {
    color: Colors.secondBack,
    marginTop: 3,
  },
  amtStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
    marginHorizontal: 10,
  },
});

export default AccountCard;
