import {StyleSheet} from 'react-native';
import {COLORS} from 'styles';

export const styles = StyleSheet.create({
  monkeyCallUs: {
    position: 'absolute',
    top: '-5%',
    left: '-18%',
    alignSelf: 'flex-start',
  },
  container: {
    position: 'relative',
    padding: 16,
    backgroundColor: COLORS.ceruleanCrayola,
    alignItems: 'flex-end',
  },
  title: {
    marginHorizontal: 0,
    marginVertical: 32,
    color: COLORS.white,
  },
  separator: {
    marginTop: 64,
    alignSelf: 'flex-end',
    borderColor: COLORS.white,
  },
  logo: {
    width: 128,
    height: 72,
    marginVertical: 16,
  },
  location: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  address: {
    color: COLORS.white,
    marginBottom: 8,
  },
});
