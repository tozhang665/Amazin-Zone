import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Login from './login';
import { resetErrors } from '../../actions/session';

const mapStateToProps = state =>({
  sessionErrors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  resetErrors: ()=> dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
