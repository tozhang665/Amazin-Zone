import { combineReducers } from 'redux';

import session from './session_errors_reducer';

export default combineReducers({
  sessionErrors : session
});
