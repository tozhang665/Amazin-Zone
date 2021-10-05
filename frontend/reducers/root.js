import { combineReducers } from 'redux';
import sessionsReducer from './session';
import errorsReducer from './error_reducer';
import productsReducer from './products';
import cartsReducer from './cart';

export default combineReducers({
  session: sessionsReducer,
  errors: errorsReducer,
  products: productsReducer,
  cart: cartsReducer
});