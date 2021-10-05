import { connect } from "react-redux";
import React from "react";
import Nav from "./nav";

const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser,
  items: state.cart
})

const mapDispatchToProps = (dispatch)=>({
  logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav)