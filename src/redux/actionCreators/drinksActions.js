import types from '../actionTypes/index';

const drinkLinks = {
  categoriesList: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
  drinksList: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
};

export const getDrinkCategories = () => {
  return async (dispatch) => {
    const response = await fetch(drinkLinks.categoriesList);
    let data = await response.json();

    const newData = data.drinks.map((item) => {
      return {
        name: item.strCategory,
        isSelected: true,
      };
    });
    console.log('newData categories', newData);
    dispatch({
      type: types.GET_DRINK_CATEGORIES,
      payload: newData,
    });
  };
};

export const getNextDrinks = () => {
  return async (dispatch, getState) => {
    console.log('getState', getState());
    // debugger;
    const {lastLoadedCategory, drinkCategories} = getState().drinks;
    let lastLoadedCategoryIndex = -1;
    if (lastLoadedCategory !== '') {
      lastLoadedCategoryIndex = drinkCategories.findIndex(
        (item) => item.name === lastLoadedCategory,
      );
    }
    let nextLoadedCategoryIndex = null;
    for (let i = ++lastLoadedCategoryIndex; i < drinkCategories.length; i++) {
      if (drinkCategories[i].isSelected) {
        nextLoadedCategoryIndex = i;
        break;
      }
    }
    const nextCategory =
      nextLoadedCategoryIndex != null
        ? drinkCategories[nextLoadedCategoryIndex]['name']
        : null;
    if (nextCategory) {
      const response = await fetch(
        `${drinkLinks.drinksList}?c=${nextCategory}`,
      );
      let data = await response.json();
      dispatch({
        type: types.GET_DRINKS,
        payload: {
          data: data.drinks,
          category: nextCategory,
        },
      });
    } else {
      dispatch({
        type: types.GET_DRINKS,
      });
    }
  };
};

export const applyCategoryFilters = (data) => {
  return {
    type: types.APPLY_CATEGORY_FILTERS,
    payload: data,
  };
};

export const cleanDrinkList = (data) => {
  return {
    type: types.APPLY_CATEGORY_FILTERS,
    payload: data,
  };
};
