import {StyleSheet} from 'react-native';
import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    zIndex: 1,
    right: '4%',
    bottom: '4%',
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.white,

    shadowColor: COLORS.ceruleanCrayola,
    shadowOffset: {width: -6, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
});
