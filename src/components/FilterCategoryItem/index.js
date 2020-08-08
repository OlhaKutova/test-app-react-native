import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {styles} from '../../styles/filterItemStyles';

const FilterCategoryItem = (props) => {
  const {
    item: {name, isSelected},
    setToggleCheckBox,
  } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => setToggleCheckBox(name, !isSelected)}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <CheckBox
          disabled={false}
          value={isSelected}
          tintColor="transparent"
          onTintColor="transparent"
          onCheckColor={'black'}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilterCategoryItem;
