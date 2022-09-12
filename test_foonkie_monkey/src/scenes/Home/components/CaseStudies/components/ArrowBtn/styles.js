import {StyleSheet} from 'react-native';
import {COLORS} from 'styles';

const btn = {
  position: 'absolute',
  top: '50%',
  zIndex: 1,
  width: 24,
  height: 24,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.white,
};

export const styles = StyleSheet.create({
  btnLeft: {
    ...btn,
    left: '4%',
  },
  btnRight: {
    ...btn,
    right: '4%',
  },
});
