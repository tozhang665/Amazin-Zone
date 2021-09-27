
import * as sessionUtil from "../utils/session"


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS"


const receieveCurrentUser = user =>({
  type: RECEIVE_CURRENT_USER,
  user
});


const logoutCurrentUser = () =>({
  type: LOGOUT_CURRENT_USER,
});


export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_SESSION_ERRORS,
})




export const createNewUser = formUser => dispatch => sessionUtil.postUser(formUser)
.then(
  (user)=>dispatch(receieveCurrentUser(user)) , 
  (err)=>dispatch(receiveErrors(err.responseJSON))
  );

export const login = formUser => dispatch => sessionUtil.postSession(formUser)
.then(
  (user)=>dispatch((receieveCurrentUser(user))) , 
  (err)=>(dispatch(receiveErrors(err.responseJSON)))
  );

export const logout = () => dispatch => sessionUtil.deleteSession()
.then(()=>dispatch(logoutCurrentUser()));
