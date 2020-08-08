import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActivityIndicator, SectionList, View, Text} from 'react-native';

import {getNextDrinks} from '../../redux/actionCreators/drinksActions';
import Card from '../../components/Card/index';
import {styles} from '../../styles/drinksStyles';

const Drinks = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  const {drinkList, isLoading} = drinks;
  const listRef = useRef(null);

  useEffect(() => {
    dispatch(getNextDrinks());
  }, [dispatch]);

  const loadMoreDrinks = () => {
    dispatch(getNextDrinks());
  };

  const renderEmpty = () => {
    return (
      <View style={{flex: 1}}>
        <Text>No cocktails</Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SectionList
      sections={drinkList}
      keyExtractor={(item) => item.idDrink}
      renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      stickySectionHeadersEnabled={false}
      renderItem={({item}) => (
        <Card strDrinkThumb={item.strDrinkThumb} strDrink={item.strDrink} />
      )}
      ref={listRef}
      style={{flex: 1}}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      onEndReached={loadMoreDrinks}
      onEndReachedThreshold={0.1}
      initialNumToRender={16}
      // ListFooterComponent={this.renderFooter}
      ListEmptyComponent={renderEmpty}
      // maxToRenderPerBatch={8}
      // windowSize={8}
    />
  );
};

export default Drinks;
