import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: palette.white,
  },
  // sectionWrapper: {
  //   marginBottom: 20,
  // },
  title: {
    color: palette.gray,
    fontSize: 14,
    lineHeight: 16,
    marginVertical: 20,
  },
});
