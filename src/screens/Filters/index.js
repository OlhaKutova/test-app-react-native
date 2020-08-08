import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';

import FilterCategoryItem from '../../components/FilterCategoryItem';
import ApplyFiltersButton from '../../components/ApplyFiltersButton';
import {
  applyCategoryFilters,
  getNextDrinks,
} from '../../redux/actionCreators/drinksActions';
import {styles} from '../../styles/filterStyles';

const Filters = ({navigation}) => {
  const dispatch = useDispatch();
  const drinkCategories = useSelector((state) => state.drinks.drinkCategories);
  const [filterList, setFilterList] = useState(drinkCategories || []);

  const setToggleCheckBox = (name, isSelected) => {
    setFilterList((prevFilterList) => {
      const index = prevFilterList.findIndex((item) => item.name === name);
      const newFilterList = [...prevFilterList];
      newFilterList[index] = {name, isSelected};
      return newFilterList;
    });
  };

  useEffect(() => {
    console.log('filterList', filterList);
    console.log('drinkCategories', drinkCategories);
  });

  const applyFilters = () => {
    dispatch(applyCategoryFilters(filterList));
    dispatch(getNextDrinks());
    navigation.navigate('Drinks');
  };

  const renderFooter = () => {
    return (
      <View>
        <ApplyFiltersButton applyFilters={applyFilters} />
      </View>
    );
  };

  return (
    <FlatList
      data={filterList}
      keyExtractor={(item) => item.idDrink}
      renderItem={({item}) => (
        <FilterCategoryItem item={item} setToggleCheckBox={setToggleCheckBox} />
      )}
      contentContainerStyle={styles.container}
      ListFooterComponent={renderFooter}
      //ListEmptyComponent={renderEmpty}
    />
  );
};

export default Filters;
