import React from 'react';
import PropTypes from 'prop-types';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ARROW_ICON} from './consts';

const Arrowbtn = ({arrow, handleOnPress}) => (
  <TouchableOpacity
    style={arrow !== 'left' ? styles.btnRight : styles.btnLeft}
    onPress={() => handleOnPress()}>
    <Image source={ARROW_ICON[arrow]} />
  </TouchableOpacity>
);

Arrowbtn.propTypes = {
  arrow: PropTypes.string,
  handleOnPress: PropTypes.func,
};

export default Arrowbtn;
