import {StyleSheet} from 'react-native';
import {palette} from '../palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: palette.white,
  },
  title: {
    color: palette.gray,
    fontSize: 14,
    lineHeight: 16,
    marginVertical: 20,
  },
});
