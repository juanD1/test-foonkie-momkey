import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {styles} from './styles';

const Title = ({style, text}) => (
  <Text style={{...styles.title, ...style}}>{text}</Text>
);

Title.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
};

export default Title;
