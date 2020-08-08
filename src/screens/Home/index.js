import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button, ActivityIndicator} from 'react-native';

import {getDrinkCategories} from '../../redux/actionCreators/drinksActions';
import {styles} from '../../styles/homeStyles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const drinkCategories = useSelector((state) => state.drinks.drinkCategories);

  useEffect(() => {
    dispatch(getDrinkCategories());
  }, [dispatch]);

  if (drinkCategories.length === 0) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Drinks"
        onPress={() => navigation.navigate('Drinks')}
      />
    </View>
  );
};

export default Home;
