import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {styles} from './styles';

const Title = ({style, text, align = 'center', color}) => (
  <Text style={{...styles.title, textAlign: align, color, ...style}}>
    {text}
  </Text>
);

Title.propTypes = {
  style: PropTypes.object,
  align: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Title;
