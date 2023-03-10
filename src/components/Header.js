import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({
  navigation,
  title,
  onPress,
  showIcon,
  showTitle,
  value,
  icon,
  style,
  showImage,
  AddBtn,
  actionPress,
}) => {
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
      <View style={styles.titleContainer}>
        {showTitle === true && <Text style={styles.titleText}>{title}</Text>}
      </View>
      <View style={styles.ImageContainer}>
        <TouchableOpacity onPress={actionPress}>
          {showImage === true && (
            <Image
              source={require('../assets/img/holder.jpg')}
              style={styles.imgStyle}
            />
          )}

          {AddBtn === true && (
            <Icon name="add-circle" color={Colors.secondBack} size={32} />
          )}
        </TouchableOpacity>
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
  titleText: {
    fontSize: 20,
    fontFamily: Font['poppins-bold'],
    fontWeight: 'bold',
    color: Colors.secondBack,
  },
});

export default Header;
