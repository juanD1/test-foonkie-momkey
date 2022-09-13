import {StyleSheet} from 'react-native';
import {FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
    flexDirection: 'row',
    alignContent: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  fullName: {
    fontSize: FONT_SIZE.headline,
    fontWeight: 'bold',
  },
});
