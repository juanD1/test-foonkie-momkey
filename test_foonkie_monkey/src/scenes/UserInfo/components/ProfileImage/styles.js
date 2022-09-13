import {StyleSheet} from 'react-native';
import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 144,
    height: 144,
    marginTop: 64,
    borderRadius: 50,
  },
  btn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: COLORS.white,
  },
});
