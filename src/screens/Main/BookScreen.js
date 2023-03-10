import React, {useContext} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';
import {AuthContext} from '../../nav/AuthProvider';

import Header from '../../components/Header';
import NewContat from '../../components/NewContat';

const BookScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainWrap}>
          <Header
            style={styles.header}
            icon="menu"
            showIcon={true}
            showImage={false}
            AddBtn={true}
            actionPress={() => navigation.navigate('AddContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
          <NewContat
            cardstyle={styles.contactCard}
            onPress={() => navigation.navigate('ViewContact')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  mainWrap: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    marginVertical: 20,
  },
  contactCard: {
    marginTop: 10,
  },
  totalAmt: {
    width: '48%',
  },
});

export default BookScreen;
