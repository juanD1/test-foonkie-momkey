import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {styles} from './styles';

const SimpleText = ({style, text}) => (
  <Text style={{...styles.title, ...style}}>{text}</Text>
);

SimpleText.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};

export default SimpleText;
