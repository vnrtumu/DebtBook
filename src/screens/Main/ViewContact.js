import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Header from '../../components/Header';
import AccountCard from '../../components/AccountCard';
import Overview from '../../components/OverView';

import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';
import Transaction from '../../components/Transaction';

const ViewContact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainWrap}>
          <Header
            style={styles.header}
            showTitle={true}
            onPress={() => navigation.goBack()}
            showImage={false}
            title="Profile"
          />

          <View style={styles.profileHeader}>
            <View style={styles.imgWrap}>
              <Image
                source={require('../../assets/img/holder.jpg')}
                style={styles.profileImg}
              />
            </View>
            <View style={styles.contactWrap}>
              <Text style={styles.nameText}>Venkata Narayana Reddy</Text>
              <Text style={styles.numText}>87900 10929</Text>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.btnText}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.titleText}>Overview</Text>

            <View style={styles.accSection}>
              <AccountCard
                title="Principle"
                icon="bank"
                balance="25,000"
                cardStyle={{width: '48%'}}
                disabledBtn={true}
              />
              <AccountCard
                title="Intrest"
                icon="book"
                balance="2,50,000"
                cardStyle={{width: '48%'}}
                disabledBtn={true}
              />
            </View>
            <Overview
              title="Intrest"
              balance="2,50,000"
              cardStyle={styles.totalAmt}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.titleText}>Transactions</Text>
            <Transaction
              date="22/10/2020"
              balance="250000"
              debit={false}
              trStyle={styles.trStyle}
            />
            <Transaction
              date="22/10/2020"
              balance="25000"
              debit={false}
              trStyle={styles.trStyle}
            />
            <Transaction
              date="22/10/2020"
              balance="250000"
              debit={true}
              trStyle={styles.trStyle}
            />
            <Transaction
              date="22/10/2020"
              balance="25000"
              debit={false}
              trStyle={styles.trStyle}
            />
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
  },
  header: {
    marginVertical: 20,
  },
  profileHeader: {
    flexDirection: 'row',
  },
  imgWrap: {
    width: '25%',
    alignSelf: 'center',
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  contactWrap: {
    width: '55%',
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
    alignSelf: 'center',
    textAlign: 'center',
  },
  numText: {
    fontSize: 12,
    fontWeight: '900',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
    textAlign: 'center',
  },
  editBtn: {
    width: '20%',
    alignSelf: 'center',
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
    alignSelf: 'center',
  },
  section: {
    width: '100%',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondBack,
    fontFamily: Font['poppins-bold'],
  },
  accSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalAmt: {
    width: '100%',
  },
  trStyle: {
    marginTop: Spacing,
  },
});

export default ViewContact;
