import React from 'react';
import PropTypes from 'prop-types';
import {Linking} from 'react-native';
import Button from '../Button';
import {BODY, SUBJECT} from './consts';

const MessageEmailBtn = ({style}) => {
  const handleOnPress = () => {
    Linking.openURL(`mailto:?subject=${SUBJECT}&body=${BODY}`);
  };

  return (
    <Button style={style} text="Get in touch!" handleOnPress={handleOnPress} />
  );
};

MessageEmailBtn.propTypes = {
  style: PropTypes.object,
};

export default MessageEmailBtn;
