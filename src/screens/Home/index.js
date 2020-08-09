import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';

import {getDrinkCategories} from '../../redux/actionCreators/index';
import ImageAnimated from '../../components/ImageAnimated';
import Loader from '../../components/Loader';
import CustomButton from '../../components/CustomButton';
import {styles} from '../../styles/screens/homeStyles';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const drinkCategories = useSelector((state) => state.drinkCategories);

  useEffect(() => {
    dispatch(getDrinkCategories());
  }, [dispatch]);

  if (drinkCategories.length === 0) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Drinks</Text>
      <ImageAnimated />
      <CustomButton
        title="open drink list"
        clickAction={() => navigation.navigate('Drinks')}
      />
    </View>
  );
};

export default Home;
