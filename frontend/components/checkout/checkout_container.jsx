import { connect } from "react-redux";
import Checkout from "./checkout";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})



export default connect(mapStateToProps,null)(Checkout)