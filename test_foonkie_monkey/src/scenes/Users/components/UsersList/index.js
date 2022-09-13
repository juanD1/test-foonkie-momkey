import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import useGetUsers from '../../hooks/useGetUsers';
import UserSection from '../UserSection';
import FooterSection from '../FooterSection';
import {COLORS} from 'styles';

const UsersList = () => {
  const {loading, users, handleGetUser} = useGetUsers();

  return (
    <>
      {!loading ? (
        <FlatList
          data={users}
          renderItem={UserSection}
          keyExtractor={({id}) => id}
          ListFooterComponent={() => (
            <FooterSection handleLoadUsers={handleGetUser} />
          )}
        />
      ) : (
        <ActivityIndicator size="large" color={COLORS.ceruleanCrayola} />
      )}
    </>
  );
};

export default UsersList;
