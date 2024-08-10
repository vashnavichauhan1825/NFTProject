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
  detailContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  detailText: {
    textAlign: 'left',
  },
  detailImg: {
    width: 400,
    height: 400,
    borderRadius: 15,
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'Barlow-Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },
  terText: {
    color: colors.tertiary,
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    fontSize: 32,
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  bgSec: {
    backgroundColor: colors.secondary,
  },

  bgTer: {
    backgroundColor: colors.tertiary,
  },
  mt20: {
    marginTop: 20,
  },
  secText20: {
    color: colors.secondary,
    fontSize: 20,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default styles;
