import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

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
  const [isVisible, setIsVisible] = useState(false);

  const displayModal = () => {
    setIsVisible(true);
    // this.setState({isVisible: show});
  };
  return (
    <View style={[cardStyle, styles.accCard]}>
      <Text style={styles.cardHeaderText}>Summary</Text>

      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has now been closed.');
        }}
        style={styles.modelScreen}>
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          style={styles.closeButton}>
          <Ionicons name="close-circle" color={Colors.secondBack} size={35} />
        </Pressable>
        <Image
          source={require('../assets/img/sample.jpeg')}
          style={styles.modelImg}
          resizeMode="contain"
        />
      </Modal>

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
          onPress={() => {
            displayModal(true);
          }}
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
  modelImg: {
    justifyContent: 'center',
    width: '100%',
    height: deviceHeight,
    alignSelf: 'center',
  },

  closeButton: {
    position: 'absolute',
    zIndex: 1000,
    alignSelf: 'flex-end',
    margin: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  modelScreen: {
    margin: 20,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Overview;
