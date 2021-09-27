import { combineReducers } from 'redux';
import sessionsReducer from './session';
import errorsReducer from './error_reducer';

export default combineReducers({
  session: sessionsReducer,
  errors: errorsReducer,
});