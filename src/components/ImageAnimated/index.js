import React, {useEffect, useRef} from 'react';
import {Animated, Image} from 'react-native';

import {styles} from '../../styles/components/imageAnimatedStyles';

const ImageAnimated = () => {
  const fadeImage = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeImage, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View style={{opacity: fadeImage}}>
      <Image
        source={require('../../../assets/images/cocktail.jpg')}
        style={styles.img}
      />
    </Animated.View>
  );
};

export default ImageAnimated;
