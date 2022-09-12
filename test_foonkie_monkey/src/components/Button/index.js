import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({text, handleOnPress}) => (
  <TouchableOpacity style={styles.btn} onPress={() => handleOnPress()}>
    <Text style={styles.btnText}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  handleOnPress: PropTypes.func,
};

export default Button;
