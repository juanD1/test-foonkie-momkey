import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';
import SimpleText from 'components/SimpleText';
import {styles} from './styles';

const NO_OP = () => {};

const UserSection = ({item, handleOnPress = NO_OP}) => {
  return (
    <TouchableOpacity style={styles.section} onPress={handleOnPress}>
      <Image style={styles.avatar} source={{url: item.avatar}} />
      <View style={styles.textSection}>
        <SimpleText
          style={styles.fullName}
          text={`${item.first_name} ${item.last_name}`}
        />
        <SimpleText text={item.email} />
      </View>
    </TouchableOpacity>
  );
};

UserSection.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    fist_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  }),
  handleOnPress: PropTypes.func,
};

export default UserSection;
