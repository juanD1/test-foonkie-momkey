import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import useGetUsers from '../../hooks/useGetUsers';
import UserSection from '../UserSection';
import FooterSection from '../FooterSection';
import {COLORS} from 'styles';
import useSaveUsers from '../../hooks/useSaveUsers';

const UsersList = () => {
  const {loading, users, handleGetUser} = useGetUsers();
  const {handleSaveUsers} = useSaveUsers(users);

  return (
    <>
      {!loading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          renderItem={UserSection}
          keyExtractor={({id}) => id}
          ListFooterComponent={() => (
            <FooterSection
              handleLoadUsers={handleGetUser}
              handleSaveToDb={handleSaveUsers}
            />
          )}
        />
      ) : (
        <ActivityIndicator size="large" color={COLORS.ceruleanCrayola} />
      )}
    </>
  );
};

export default UsersList;
