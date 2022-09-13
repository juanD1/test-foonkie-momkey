import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Button from 'components/Button';
import {styles} from './styles';

const NO_OP = () => {};

const FooterSection = ({handleLoadUsers = NO_OP, handleSaveToDb = NO_OP}) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.btn}
        text="Load more"
        handleOnPress={handleLoadUsers}
      />
      <Button
        style={styles.btn}
        text="Save on db"
        handleOnPress={handleSaveToDb}
      />
    </View>
  );
};

FooterSection.propTypes = {
  handleLoadUsers: PropTypes.func,
  handleSaveToDb: PropTypes.func,
};

export default FooterSection;
