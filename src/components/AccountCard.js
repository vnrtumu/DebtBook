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
const height = Dimensions.get('window').height;

const AccountCard = ({title, icon, style, balance}) => {
  return (
    <TouchableOpacity style={styles.accCard}>
      <Text style={styles.cardHeaderText}>{title}</Text>
      <View style={styles.content}>
        <Icon
          name={icon}
          size={20}
          color={Colors.text}
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
    width: width * 0.43,
    // height: height / 7,
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
    color: Colors.text,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconStyle: {
    color: Colors.text,
    marginTop: 3,
  },
  amtStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.text,
    marginHorizontal: 10,
  },
});

export default AccountCard;
