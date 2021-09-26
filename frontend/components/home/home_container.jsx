import { connect } from "react-redux";
import React from "react";
import Home from "./home";

const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)