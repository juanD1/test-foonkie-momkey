import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View} from 'react-native';
import Title from 'components/Title';
import {styles} from './styles';

const IndustryItem = ({id, industry, actived = true, handleOnPress}) => (
  <TouchableOpacity
    style={!actived ? styles.item : styles.actived}
    onPress={() => handleOnPress(id)}>
    {actived && <View style={styles.line} />}
    <Title
      style={!actived ? styles.disabledText : styles.text}
      text={industry}
    />
  </TouchableOpacity>
);

IndustryItem.propTypes = {
  id: PropTypes.number,
  industry: PropTypes.string,
  actived: PropTypes.bool,
  handleOnPress: PropTypes.func,
};

export default IndustryItem;
