import {Dimensions, StyleSheet} from 'react-native';

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width / 1.2;
const imageHeight = Math.round((dimensions.width * 9) / 11);

export const styles = StyleSheet.create({
  img: {
    marginVertical: 20,
    width: imageWidth,
    height: imageHeight,
    borderRadius: 3,
  },
});
