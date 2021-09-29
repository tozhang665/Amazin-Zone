import { connect } from "react-redux";
import React from "react";
import Splash from "./splash";

const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Splash)