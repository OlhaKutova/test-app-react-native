import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SectionList, Text} from 'react-native';

import {getNextDrinks} from '../../redux/actionCreators/index';
import Card from '../../components/Card/index';
import EmptyList from '../../components/EmptyList';
import Loader from '../../components/Loader';
import Footer from '../../components/Footer';
import {styles} from '../../styles/screens/drinksStyles';

const Drinks = () => {
  const dispatch = useDispatch();
  const {isListCompleted, drinkList, isLoading} = useSelector((state) => state);
  const listRef = useRef(null);

  useEffect(() => {
    dispatch(getNextDrinks());
  }, [dispatch]);

  const renderFooter = () => {
    return drinkList.length !== 0 && isListCompleted && <Footer />;
  };

  const loadMoreDrinks = () => {
    dispatch(getNextDrinks());
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SectionList
      sections={drinkList}
      keyExtractor={(item) => item.idDrink}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.title}>{title}</Text>
      )}
      stickySectionHeadersEnabled={false}
      renderItem={({item}) => (
        <Card strDrinkThumb={item.strDrinkThumb} strDrink={item.strDrink} />
      )}
      ref={listRef}
      style={styles.container}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      onEndReached={loadMoreDrinks}
      onEndReachedThreshold={0.1}
      initialNumToRender={16}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={() => <EmptyList />}
    />
  );
};

export default Drinks;
