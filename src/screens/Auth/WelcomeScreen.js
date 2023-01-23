import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';

const {height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.imgStyle}
          resizeMode="contain"
          source={require('../../assets/img/welcome-img.png')}
        />
        <View style={styles.textWrap}>
          <Text style={styles.mainHeading}>Discover Your Dream Job here</Text>

          <Text style={styles.subHeading}>
            Explore all the existing job roles based or your interest and study
            major
          </Text>
        </View>
        <View style={styles.btnWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.loginWrap}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.registerWrap}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imgStyle: {
    height: height / 2.5,
  },
  textWrap: {
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  mainHeading: {
    fontSize: FontSize.xxLarge,
    color: Colors.primary,
    fontFamily: Font['poppins-bold'],
    textAlign: 'center',
  },
  subHeading: {
    fontSize: FontSize.small,
    color: Colors.text,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    marginTop: Spacing * 2,
  },
  btnWrap: {
    paddingHorizontal: Spacing * 2,
    paddingTop: Spacing * 6,
    flexDirection: 'row',
  },
  loginWrap: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: '48%',
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  loginText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: 'center',
  },
  registerWrap: {
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: '48%',
    borderRadius: Spacing,
  },
  registerText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.text,
    fontSize: FontSize.large,
    textAlign: 'center',
  },
});
