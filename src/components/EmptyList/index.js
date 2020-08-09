import React from 'react';
import {View, Text} from 'react-native';

import ImageAnimated from '../ImageAnimated';
import {styles} from '../../styles/components/emptyListStyles';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You have not selected any drink from the list. Please open the filters
        section and select a drink.
      </Text>
      <ImageAnimated />
    </View>
  );
};

export default EmptyList;
