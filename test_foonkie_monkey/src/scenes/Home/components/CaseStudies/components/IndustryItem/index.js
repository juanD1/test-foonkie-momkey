import React from 'react';
import PropTypes from 'prop-types';
import {Platform, TouchableOpacity, View} from 'react-native';
import Title from 'components/Title';
import SimpleText from 'components/SimpleText';
import {styles} from './styles';

const IndustryItem = ({id, industry, actived, handleOnPress}) => (
  <TouchableOpacity
    style={!actived ? styles.item : styles.actived}
    onPress={() => handleOnPress(id)}>
    {actived && <View style={styles.line} />}
    {Platform.OS !== 'ios' ? (
      <SimpleText text={industry} />
    ) : (
      <Title
        style={!actived ? styles.disabledText : styles.text}
        text={industry}
      />
    )}
  </TouchableOpacity>
);

IndustryItem.propTypes = {
  id: PropTypes.number,
  industry: PropTypes.string,
  actived: PropTypes.bool,
  handleOnPress: PropTypes.func,
};

export default IndustryItem;
