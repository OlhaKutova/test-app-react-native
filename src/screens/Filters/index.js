import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';

import {
  applyCategoryFilters,
  getNextDrinks,
} from '../../redux/actionCreators/index';
import FilterCategoryItem from '../../components/FilterCategoryItem';
import CustomButton from '../../components/CustomButton';
import {styles} from '../../styles/screens/filtersStyles';

const Filters = ({navigation}) => {
  const dispatch = useDispatch();
  const drinkCategories = useSelector((state) => state.drinkCategories);
  const [filterList, setFilterList] = useState(drinkCategories || []);

  const setToggleCheckBox = (name, isSelected) => {
    setFilterList((prevFilterList) => {
      const index = prevFilterList.findIndex((item) => item.name === name);
      const newFilterList = [...prevFilterList];
      newFilterList[index] = {name, isSelected};
      return newFilterList;
    });
  };

  const applyFilters = () => {
    dispatch(applyCategoryFilters(filterList));
    dispatch(getNextDrinks());
    navigation.navigate('Drinks');
  };

  return (
    <FlatList
      data={filterList}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <FilterCategoryItem item={item} setToggleCheckBox={setToggleCheckBox} />
      )}
      contentContainerStyle={styles.container}
      ListFooterComponent={() => (
        <CustomButton title="Apply" clickAction={applyFilters} />
      )}
    />
  );
};

export default Filters;
