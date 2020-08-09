import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../../styles/components/customButtonStyles';

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.clickAction} style={styles.wrapper}>
      <View>
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
