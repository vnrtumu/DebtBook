import React from 'react';
import {
  Image,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';
import DateHead from '../../components/DateHead';

const width = Dimensions.get('window').width;
const ViewBook = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/img/holder.jpg')}
            style={styles.imgPic}
          />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Venkat Narayana Reddy</Text>
          <Text style={styles.addressText}>Address: Kotha Reddy Plaem</Text>
        </View>
      </View>
      <View style={styles.desc}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.body}>
          Venkat reddy Took two lack rupees for intrest of 2rupess for family
          expenses
        </Text>
      </View>
      <View style={styles.history}>
        <Text style={styles.heading}>Transaction history</Text>
        <DateHead />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: width / 3,
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  imgPic: {
    height: 90,
    width: 90,
    borderRadius: 35,
  },
  nameContainer: {
    width: (2 * width) / 3,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: FontSize.medium,
    color: Colors.primary,
    fontFamily: Font['poppins-bold'],
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font['poppins-semiBold'],
    lineHeight: Spacing * 2.5,
    fontWeight: '600',
  },
  desc: {
    marginVertical: 10,
    paddingTop: 10,
  },
  heading: {
    fontSize: FontSize.medium,
    color: Colors.primary,
    fontFamily: Font['poppins-bold'],
    fontWeight: 'bold',
  },
  body: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font['poppins-regular'],
    alignItems: 'center',
  },
});

export default ViewBook;
