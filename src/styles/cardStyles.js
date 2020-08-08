import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: palette.gray,
    paddingLeft: 14,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});
