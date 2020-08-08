import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from '../../styles/cardStyles';

const Drinks = (props) => {
  return (
    <View style={styles.cardWrapper}>
      <Image source={{uri: props.strDrinkThumb}} style={styles.icon} />
      <Text style={styles.cardTitle}>{props.strDrink}</Text>
    </View>
  );
};

export default Drinks;
