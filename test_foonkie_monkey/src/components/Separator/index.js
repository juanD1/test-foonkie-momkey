import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {styles} from './styles';

const Seprator = ({style, color, align = 'center'}) => (
  <View
    style={{...styles.seprator, borderColor: color, alignSelf: align, ...style}}
  />
);

Seprator.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  align: PropTypes.string,
};

export default Seprator;
