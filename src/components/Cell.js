import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Font from '../assets/constants/Font';
import Colors from '../assets/constants/Colors';

const Cell = ({title, value, isCurrency, cellStyle, isBtn, onPress}) => {
  return (
    <View style={[cellStyle, styles.cellWrap]}>
      <Text style={styles.cellTitle}>{title}</Text>
      {isBtn === true ? (
        <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
          <Text style={styles.cellValue}>
            {isCurrency === true && '\u20B9'} {value}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.cellValue}>
          {isCurrency === true && '\u20B9'} {value}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cellWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cellTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.text,
    width: '40%',
  },
  cellValue: {
    fontSize: 14,
    fontWeight: '900',
    fontFamily: Font['poppins-bold'],
    color: Colors.primary,
    width: '60%',
  },
  btnStyle: {
    width: '100%',
  },
});

export default Cell;
