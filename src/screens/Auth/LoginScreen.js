import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Spacing from '../../assets/constants/Spacing';
import FontSize from '../../assets/constants/FontSize';
import Colors from '../../assets/constants/Colors';
import Font from '../../assets/constants/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppTextInput from '../../components/AppTextInput';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.loginIntro}>
          <Text style={styles.loginHeading}>Login here</Text>
          <Text style={styles.loginSubHeading}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={styles.formWrap}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>

        <View>
          <Text style={styles.forgotBtn}>Forgot your password ?</Text>
        </View>

        <TouchableOpacity style={styles.singinWrap}>
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.registerBtn}>
          <Text style={styles.registerText}>Create new account</Text>
        </TouchableOpacity>

        <View style={styles.orTextwrap}>
          <Text style={styles.orText}>Or continue with</Text>

          <View style={styles.socialWrap}>
            <TouchableOpacity style={styles.googleBtn}>
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: Spacing * 2,
  },
  loginIntro: {
    alignItems: 'center',
  },
  loginHeading: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font['poppins-bold'],
    marginVertical: Spacing * 3,
  },
  loginSubHeading: {
    fontFamily: Font['poppins-semiBold'],
    fontSize: FontSize.large,
    maxWidth: '60%',
    textAlign: 'center',
  },
  formWrap: {
    marginVertical: Spacing * 3,
  },
  forgotBtn: {
    fontFamily: Font['poppins-semiBold'],
    fontSize: FontSize.small,
    color: Colors.primary,
    alignSelf: 'flex-end',
  },
  singinWrap: {
    padding: Spacing * 2,
    backgroundColor: Colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
  },
  signText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.onPrimary,
    textAlign: 'center',
    fontSize: FontSize.large,
  },
  registerBtn: {
    padding: Spacing,
  },
  registerText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.text,
    textAlign: 'center',
    fontSize: FontSize.small,
  },
  orTextwrap: {
    marginVertical: Spacing * 3,
  },
  orText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.primary,
    textAlign: 'center',
    fontSize: FontSize.small,
  },
  socialWrap: {
    marginTop: Spacing,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleBtn: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
});

export default LoginScreen;
