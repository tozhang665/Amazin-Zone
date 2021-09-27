import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SignUp from './sign_up';
import { resetErrors } from '../../actions/session';

const mapStateToProps = state =>({
  sessionErrors: state.errors.sessionErrors
});


const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  resetErrors: ()=> dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
