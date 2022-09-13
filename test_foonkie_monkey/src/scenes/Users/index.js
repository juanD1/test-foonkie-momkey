import React from 'react';
import {View} from 'react-native';
import UsersList from './components/UsersList';
import {styles} from './styles';

const Users = () => (
  <View style={styles.container}>
    <UsersList />
  </View>
);

export default Users;
