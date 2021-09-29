import { combineReducers } from 'redux';
import sessionsReducer from './session';
import errorsReducer from './error_reducer';
import productsReducer from './products';

export default combineReducers({
  session: sessionsReducer,
  errors: errorsReducer,
  products: productsReducer,
});