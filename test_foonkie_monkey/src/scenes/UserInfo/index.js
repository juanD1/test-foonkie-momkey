import React from 'react';
import {View, Image} from 'react-native';
import SimpleText from 'components/SimpleText';
import {styles} from './styles';

const DUMMY_USER = {
  id: 3,
  email: 'emma.wong@reqres.in',
  first_name: 'Emma',
  last_name: 'Wong',
  avatar: 'https://reqres.in/img/faces/3-image.jpg',
};

const UserInfo = () => {
  const user = DUMMY_USER;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{url: user.avatar}} />
      <SimpleText
        style={styles.fullName}
        text={`${user.first_name} ${user.last_name}`}
      />
      <SimpleText text={user.email} />
    </View>
  );
};

export default UserInfo;
