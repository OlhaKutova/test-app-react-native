import types from '../actionTypes/index';

const initialState = {
  isLoading: true,
  drinkList: [],
  drinkCategories: [],
  lastLoadedCategory: '',
  isListCompleted: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_DRINK_CATEGORIES:
      return {
        ...state,
        drinkCategories: payload,
      };
    case types.GET_DRINKS:
      if (payload) {
        return {
          ...state,
          isLoading: false,
          drinkList: [
            ...state.drinkList,
            {
              title: payload.category,
              data: payload.data,
            },
          ],
          lastLoadedCategory: payload.category,
        };
      } else {
        return {
          ...state,
          isLoading: false,
        };
      }
    case types.APPLY_CATEGORY_FILTERS:
      return {
        ...state,
        isLoading: true,
        drinkList: [],
        drinkCategories: payload,
        lastLoadedCategory: '',
      };
    case types.SET_LIST_COMPLETED:
      return {
        ...state,
        isLoading: false,
        isListCompleted: true,
      };
    default:
      return state;
  }
};
