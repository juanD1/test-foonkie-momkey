import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: COLORS.powderBlue,
  },
  welcome: {
    padding: 16,
    backgroundColor: COLORS.powderBlue,
  },
  seprator: {
    alignSelf: 'center',
    width: 64,
    borderWidth: 0.5,
    borderColor: COLORS.black,
    opacity: 0.5,
  },
  title: {
    fontFamily: 'DMSerifDisplay-Regular',
    fontSize: FONT_SIZE.title1,
    fontWeight: '400',
    lineHeight: 38,
    letterSpacing: 0,
    textAlign: 'center',
    margin: 8,
  },
  content: {
    fontFamily: 'Rubik-Light',
    fontSize: FONT_SIZE.caption1,
    fontWeight: '300',
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: 'center',
    marginHorizontal: 64,
  },
  btn: {
    width: 120,
    backgroundColor: COLORS.ghostWhite,
    borderRadius: 21,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
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
  monkey: {
    alignSelf: 'center',
  },
});
