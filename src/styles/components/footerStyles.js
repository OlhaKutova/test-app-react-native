import {StyleSheet} from 'react-native';
import {palette} from '../palette';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
    marginBottom: 50,
  },
  title: {
    color: palette.gray,
    fontSize: 20,
    textAlign: 'center',
  },
});
