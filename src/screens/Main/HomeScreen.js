import React, {useContext} from 'react';
import {
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
import HomeCard from '../../components/HomeCard';
import AccountCard from '../../components/AccountCard';
import NewContat from '../../components/NewContat';

const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainWrap}>
          <Header style={styles.header} icon="menu" showIcon={true} />
          <View style={styles.mainCardContainer}>
            <HomeCard style={styles.homeCard} />
          </View>
          <View style={styles.mothlyAmt}>
            <Text style={styles.amtText}>
              Current Month Disbursement Amount
            </Text>
            <View style={styles.accSection}>
              <AccountCard title="Net Bal" icon="bank" balance="25,000" />
              <AccountCard title="Debt Amt" icon="book" balance="2,50,000" />
            </View>
          </View>
          <View style={styles.mothlyPersons}>
            <Text style={styles.amtText}>Issued Members</Text>
            <NewContat cardstyle={styles.contactCard} />
            <NewContat cardstyle={styles.contactCard} />
            <NewContat cardstyle={styles.contactCard} />
            <NewContat cardstyle={styles.contactCard} />
            <NewContat cardstyle={styles.contactCard} />
            <NewContat cardstyle={styles.contactCard} />
          </View>
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
    // alignSelf: 'center',
  },
  header: {
    marginVertical: 20,
  },
  mainCardContainer: {
    marginBottom: Spacing * 2,
  },
  mothlyAmt: {
    width: '100%',
    marginVertical: 10,
  },
  amtText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    fontFamily: Font['poppins-bold'],
  },
  accSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mothlyPersons: {
    width: '100%',
    marginVertical: 10,
  },
  contactCard: {
    marginTop: 10,
  },
});

export default HomeScreen;
