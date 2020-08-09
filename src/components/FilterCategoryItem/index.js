import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

import {styles} from '../../styles/components/filterItemStyles';

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
          isChecked={isSelected}
          checkedImage={
            <Image
              source={require('../../../assets/images/checkbox.png')}
              style={styles.img}
            />
          }
          unCheckedImage={
            <Image
              source={require('../../../assets/images/unchecked.png')}
              style={styles.unchecked}
            />
          }
          onClick={() => setToggleCheckBox(name, !isSelected)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilterCategoryItem;
