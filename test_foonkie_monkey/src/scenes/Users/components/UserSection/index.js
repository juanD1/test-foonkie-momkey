import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {View, Image, TouchableOpacity} from 'react-native';
import SimpleText from 'components/SimpleText';
import {styles} from './styles';

const UserSection = ({item}) => {
  const navigation = useNavigation();

  const handleUserInfo = () => {
    navigation.navigate('UserInfo', {id: item.id});
  };

  return (
    <TouchableOpacity style={styles.section} onPress={() => handleUserInfo()}>
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
};

export default UserSection;
