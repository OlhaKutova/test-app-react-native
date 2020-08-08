import {StyleSheet} from 'react-native';
import {palette} from './palette';

export const styles = StyleSheet.create({
  wrapper: {
    width: 360,
    height: 53,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: palette.mineShaft,
  },
  buttonTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: palette.white,
    textAlign: 'center',
    lineHeight: 19,
  },
});
