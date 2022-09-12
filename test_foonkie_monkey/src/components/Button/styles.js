import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  btn: {
    width: 120,
    backgroundColor: COLORS.ghostWhite,
    borderRadius: 21,
  },
  btnText: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: FONT_SIZE.callout,
    fontWeight: '400',
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: 'center',
    color: COLORS.ceruleanCrayola,
  },
});
