import { connect } from "react-redux";
import Review from "./reviews";

const mapStateToProps = state =>({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = state=>({
  
})

export default connect(mapStateToProps,null)(Review)