import {StyleSheet} from 'react-native';
import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
