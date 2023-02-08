import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import ContactCard from '../../components/ContactCard';
import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';

const BookScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.listView}>
        <ContactCard
          image={require('../../assets/img/holder.jpg')}
          name="Venkat Narayana  Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('ViewBook');
          }}
        />
        <ContactCard
          image={require('../../assets/img/holder.jpg')}
          name="Venkat Narayana  Reddy"
          area="Banagalore"
          number="87900 10929"
          style={styles.ContactCard}
          onPress={() => {
            navigation.navigate('ViewBook');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listView: {
    marginHorizontal: Spacing * 1.5,
  },
  ContactCard: {
    marginVertical: Spacing,
  },
});

export default BookScreen;
