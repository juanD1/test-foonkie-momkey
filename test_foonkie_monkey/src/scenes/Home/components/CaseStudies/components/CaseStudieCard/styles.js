import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE} from 'styles';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: COLORS.lavanderWeb,
    width: 272,
  },
  infoContainer: {
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  title: {
    marginHorizontal: 0,
    marginVertical: 16,
  },
  description: {
    fontSize: FONT_SIZE.footnote,
  },
  btn: {
    marginVertical: 16,
  },
});
