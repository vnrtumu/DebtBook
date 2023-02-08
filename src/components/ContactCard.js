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

const width = Dimensions.get('window').width;
const ContactCard = ({image, name, area, number, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, styles.ContactCardWrap]}>
      <View style={styles.imgWrap}>
        <Image style={styles.profilePic} source={image} />
      </View>
      <View style={styles.detailWrap}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.areaText}>Address: {area}</Text>
      </View>
      <View style={styles.iconWrap}>
        <Icon
          name="ios-call"
          color="#fff"
          size={Spacing * 2.5}
          style={styles.iconStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ContactCardWrap: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 13,
    padding: 15,
  },
  imgWrap: {
    width: width / 4,
    alignItems: 'center',
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  detailWrap: {
    width: width / 2,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  areaText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginTop: 4,
  },
  numberText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
  },
  iconWrap: {
    width: width / 6,
    alignSelf: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: '#fff',
  },
});

export default ContactCard;
