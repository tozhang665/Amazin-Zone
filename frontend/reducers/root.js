import { combineReducers } from 'redux';
import sessionsReducer from './session';

export default combineReducers({
  session: sessionsReducer,
});