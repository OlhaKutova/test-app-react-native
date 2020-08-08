import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../../styles/filterButtonStyles';

const ApplyFiltersButton = (props) => {
  return (
    <TouchableOpacity onPress={props.applyFilters} style={styles.wrapper}>
      <View>
        <Text style={styles.buttonTitle}>Apply</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ApplyFiltersButton;
