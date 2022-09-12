import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {styles} from './styles';

const Seprator = ({color, align = 'center'}) => (
  <View style={{...styles.seprator, borderColor: color, alignSelf: align}} />
);

Seprator.propTypes = {
  color: PropTypes.string,
  align: PropTypes.string,
};

export default Seprator;
