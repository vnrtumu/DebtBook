import React, {useContext} from 'react';
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
import {AuthContext} from '../../nav/AuthProvider';

const ProfileScreen = () => {
  const {user, logout} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.mainWrap}>
      <View>
        <Text>HomeScreen</Text>
        <Text>{user.uid}</Text>
        <TouchableOpacity style={styles.LogoutBtn} onPress={() => logout()}>
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  LogoutBtn: {
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
  logOutText: {
    fontFamily: Font['poppins-bold'],
    color: Colors.onPrimary,
    textAlign: 'center',
    fontSize: FontSize.large,
  },
});

export default ProfileScreen;
