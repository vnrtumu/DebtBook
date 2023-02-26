import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Colors from '../assets/constants/Colors';

const CustomInput = ({...otherProps}) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      {...otherProps}
    />
  );
};

export default CustomInput;
