import {StyleSheet} from 'react-native';
import {palette} from '../palette';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: palette.white,
  },
  title: {
    marginTop: 20,
    color: palette.gray,
    fontSize: 27,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
