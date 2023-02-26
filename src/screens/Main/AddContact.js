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
import HomeCard from '../../components/HomeCard';
import AccountCard from '../../components/AccountCard';
import NewContat from '../../components/NewContat';
import AppTextInput from '../../components/AppTextInput';
import CustomInput from '../../components/CustomInput';

const AddContact = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainWrap}>
          <Header
            style={styles.header}
            showTitle={true}
            onPress={() => navigation.goBack()}
            showImage={false}
            title="Add Contact"
          />
          <CustomInput />
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

export default AddContact;
