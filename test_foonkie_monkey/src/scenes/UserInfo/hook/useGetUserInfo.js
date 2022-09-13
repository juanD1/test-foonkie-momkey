import {useEffect, useState} from 'react';
import {DUMMY_USER} from '../consts';
import {getDBConnection} from 'db/connection';
import {getUser} from 'db/repositories';

const useGetUserInfo = userId => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(DUMMY_USER);

  const handleGetUser = async () => {
    setLoading(true);
    try {
      if (userId) {
        const db = await getDBConnection();
        const storedUser = await getUser(db, userId);
        console.log('storedUser: ', storedUser);
        if (storedUser) {
          setUser(storedUser);
        }
      }
    } catch (e) {
      console.log('Error: handleGetUser: ', e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return {loading, user};
};

export default useGetUserInfo;