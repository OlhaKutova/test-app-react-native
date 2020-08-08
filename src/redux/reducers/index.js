import {combineReducers} from 'redux';
import drinksReducer from './drinksReducer';

export default combineReducers({
  drinks: drinksReducer,
});
