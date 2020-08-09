import {StyleSheet} from 'react-native';
import {palette} from '../palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: palette.white,
  },
  title: {
    color: palette.gray,
    fontSize: 20,
    textAlign: 'center',
  },
});
