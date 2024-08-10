import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
    backgroundColor: colors.secondary,
    fontFamily: 'Barlow-Regular',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Barlow-Regular',
  },
  title: {
    fontSize: 24,
    color: colors.cta,
  },
  terText: {
    color: colors.tertiary,
    fontSize: 12,
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default styles;
