import { connect } from "react-redux";
import Cart from "./cart";

const mapStateToProps = state =>({
  items: state.cart,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch =>({

})


export default connect(mapStateToProps,null)(Cart)