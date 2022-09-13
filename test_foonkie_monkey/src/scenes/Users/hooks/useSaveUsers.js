import {Alert} from 'react-native';
import {getDBConnection} from 'db/connection';
import {createTable, saveUserItems} from 'db/repositories';

const useSaveUsers = users => {
  const handleSaveUsers = async () => {
    try {
      if (users && users.length) {
        const db = await getDBConnection();
        await createTable(db);
        const storedUserItems = await saveUserItems(db, users);
        if (storedUserItems.length) {
          Alert.alert('Users saved successfully', '');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {handleSaveUsers};
};

export default useSaveUsers;
