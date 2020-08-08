import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: palette.gray,
    fontSize: 16,
    lineHeight: 16,
    marginVertical: 20,
  },
});
