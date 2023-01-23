import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);
const OnbordingScreen = () => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      // onSkip={() => navigation.replace('Login')}
      // onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/img/ob0.jpeg')}
              style={styles.img}
            />
          ),
          title: 'Manage Your Leanding Wisely',
          subtitle: 'Our app will help you with that.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/img/onb1.jpeg')}
              style={styles.img}
            />
          ),
          title: 'Grow Your Rupee',
          subtitle: 'Because Rupee is the future.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../assets/img/onb2.jpeg')}
              style={styles.img}
            />
          ),
          title: "Don't Increase your debt free",
          subtitle: 'If you then god will know what happens!',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 400,
    height: 300,
  },
});
export default OnbordingScreen;
