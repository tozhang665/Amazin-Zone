import { connect } from "react-redux";
import React from "react";
import Splash from "./splash";
import { grabProducts } from "../../actions/product";

const mapStateToProps = (state) =>({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch)=>({
  grabProducts: ()=> dispatch(grabProducts())
})

export default connect(mapStateToProps,mapDispatchToProps)(Splash)