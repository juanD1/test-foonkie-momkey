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
  textContent: {
    fontSize: FONT_SIZE.caption1,
    textAlign: 'center',
    marginHorizontal: 64,
  },
  monkey: {
    alignSelf: 'center',
  },
});
