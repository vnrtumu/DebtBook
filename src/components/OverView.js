import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {durationCalculate} from '../helpers/Duraration';

import Moment from 'react-moment';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../assets/constants/Colors';
import Font from '../assets/constants/Font';
import Spacing from '../assets/constants/Spacing';
import Cell from './Cell';

// const givendate = new Date('5/3/2022');

const givendate = '05 / 03 / 2022';
const duration = durationCalculate('5/3/2022');

const Overview = ({title, icon, style, balance, cardStyle}) => {
  return (
    <View style={[cardStyle, styles.accCard]}>
      <Text style={styles.cardHeaderText}>Summary</Text>
      <View style={styles.content}>
        <Cell
          isCurrency={false}
          title="Duration"
          value={`${duration}`}
          cellStyle={styles.cellStyle}
        />
        <Cell
          isCurrency={false}
          title="Given Date"
          value={`${givendate}`}
          cellStyle={styles.cellStyle}
        />
        <Cell
          isCurrency={true}
          title="Intrest Rate"
          value="1.5"
          cellStyle={styles.cellStyle}
        />
        <Cell
          isCurrency={true}
          title="Total Amount"
          value="2,75,000"
          cellStyle={styles.cellStyle}
        />
        <Cell
          isCurrency={false}
          title="Address"
          value="Kothareddy Palem, Darsi, Prakasam, AP-523247"
          cellStyle={styles.cellStyle}
        />

        <Cell
          isCurrency={false}
          title="Address"
          value="View Document"
          isBtn={true}
          cellStyle={styles.cellStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  accCard: {
    backgroundColor: Colors.background,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 10,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    marginBottom: 10,
    color: Colors.secondBack,
  },

  amtStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: Font['poppins-bold'],
    color: Colors.secondBack,
  },
  cellStyle: {
    marginTop: Spacing,
  },
});

export default Overview;
