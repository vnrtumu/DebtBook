import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Spacing from '../assets/constants/Spacing';
import FontSize from '../assets/constants/FontSize';
import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';
import Icon from 'react-native-vector-icons/Ionicons';

const NewContat = ({cardstyle}) => {
  return (
    <TouchableOpacity style={[cardstyle, styles.cardWrap]}>
      <View style={styles.imgWrap}>
        <Image
          source={require('../assets/img/holder.jpg')}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.contactWrap}>
        <Text style={styles.nameText}>Venkata Narayana Reddy</Text>
        <Text style={styles.numText}>8790010929</Text>
      </View>
      <Text style={styles.amtText}>{'\u20B9'} 2,50,00,000</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  imgWrap: {
    width: '20%',
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  contactWrap: {
    width: '54%',
    top: Spacing,
    alignItems: 'baseline',
    alignContent: 'center',
  },
  nameText: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: Font['poppins-bold'],
    color: Colors.text,
  },
  numText: {
    fontSize: 12,
    fontFamily: Font['poppins-bold'],
    color: Colors.darkText,
  },
  amtText: {
    top: Spacing,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    marginBottom: 10,
    color: Colors.text,
  },
});

export default NewContat;
