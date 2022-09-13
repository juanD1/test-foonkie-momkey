import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Button from 'components/Button';
// import {styles} from './styles';

const NO_OP = () => {};

const FooterSection = ({handleLoadUsers = NO_OP, handleSaveToDb = NO_OP}) => {
  return (
    <View>
      <Button text="Load more" handleOnPress={handleLoadUsers} />;
      <Button text="Save on db" handleOnPress={handleSaveToDb} />;
    </View>
  );
};

FooterSection.propTypes = {
  handleLoadUsers: PropTypes.func,
  handleSaveToDb: PropTypes.func,
};

export default FooterSection;
