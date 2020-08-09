import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {styles} from '../../styles/components/loaderStyles';
import {palette} from '../../styles/palette';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.mineShaft} />
    </View>
  );
};

export default Loader;
