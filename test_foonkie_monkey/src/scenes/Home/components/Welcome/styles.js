import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: COLORS.powderBlue,
  },
  welcome: {
    position: 'relative',
    padding: 16,
    backgroundColor: COLORS.powderBlue,
    paddingBottom: 296,
  },
  textContent: {
    fontSize: FONT_SIZE.caption1,
    textAlign: 'center',
    marginHorizontal: 64,
  },
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  monkey: {
    position: 'absolute',
    top: '96%',
    zIndex: 1,
    alignSelf: 'center',
  },
});
