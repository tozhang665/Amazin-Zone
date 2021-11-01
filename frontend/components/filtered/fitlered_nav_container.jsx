import { connect } from "react-redux";
import React from "react";
import FilteredNav from "./filtered_nav";

const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser,
  items: state.cart
})

const mapDispatchToProps = (dispatch)=>({
  logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(FilteredNav)