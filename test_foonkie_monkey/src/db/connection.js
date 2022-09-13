import {openDatabase, enablePromise} from 'react-native-sqlite-storage';
import {NativeModules} from 'react-native';

enablePromise(true);

export const getDBConnection = async () => {
  try {
    return openDatabase({name: 'foonkie-monkey.db', location: 'default'});
  } catch (error) {
    console.error(error);
    throw Error('Failed to getDBConnection');
  }
};
