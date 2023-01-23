import {
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../../components/AppTextInput';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.introWrap}>
          <Text style={styles.introHeading}>Create account</Text>
          <Text style={styles.introSubHeading}>
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View style={styles.form}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
          <AppTextInput placeholder="Confirm Password" />
        </View>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Already have an account</Text>
        </TouchableOpacity>

        <View style={styles.orWrap}>
          <Text style={styles.orText}>Or continue with</Text>

          <View style={styles.socialWrap}>
            <TouchableOpacity style={styles.googleBtn}>
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iosBtn}>
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.fbBtn}>
              <Ionicons
                name="logo-facebook"
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

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: Spacing * 2,
  },
  introWrap: {
    alignItems: 'center',
  },
  introHeading: {
    fontSize: FontSize.xLarge,
    color: Colors.primary,
    fontFamily: Font['poppins-bold'],
    marginVertical: Spacing * 3,
  },
  introSubHeading: {
    fontFamily: Font['poppins-regular'],
    fontSize: FontSize.small,
    maxWidth: '80%',
    textAlign: 'center',
  },
  form: {
    marginVertical: Spacing * 3,
  },
  signUpBtn: {
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
  signUpText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.onPrimary,
    textAlign: 'center',
    fontSize: FontSize.large,
  },
  loginBtn: {
    padding: Spacing,
  },
  loginText: {
    fontFamily: Font['poppins-semiBold'],
    color: Colors.text,
    textAlign: 'center',
    fontSize: FontSize.small,
  },
  orWrap: {
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
  fbBtn: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
  iosBtn: {
    padding: Spacing,
    backgroundColor: Colors.gray,
    borderRadius: Spacing / 2,
    marginHorizontal: Spacing,
  },
});
