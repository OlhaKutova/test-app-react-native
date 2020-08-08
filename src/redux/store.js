import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import drinksReducer from '../redux/reducers/drinksReducer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
