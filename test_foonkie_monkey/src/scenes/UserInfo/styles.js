import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.lavanderWeb,
  },
  avatar: {
    width: 144,
    height: 144,
    marginTop: 64,
    borderRadius: 50,
  },
  fullName: {
    fontSize: FONT_SIZE.title1,
  },
});
