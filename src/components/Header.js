import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({navigation, onPress, showIcon, value, icon, style}) => {
  return (
    <View style={[style, styles.mainContainer]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPress}>
          {showIcon === true ? (
            <Icon name={icon} color="#000" size={32} />
          ) : (
            <Icon name="chevron-back" color="#000" size={32} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../assets/img/holder.jpg')}
          style={styles.imgStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 20,
  },
  headerContainer: {},
  ImageContainer: {},
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Header;
