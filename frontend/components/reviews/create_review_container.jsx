import { connect } from "react-redux";
import CreateReview from "./create_review";
import { resetErrors } from "../../actions/session";

const mapStateToProp = (state,ownProps) => ({
  currentUser: state.session.currentUser.id,
  currentProduct: ownProps.match.params.product_id
})

const mapDispatchToProp = dispatch =>({
  resetErrors: ()=> dispatch(resetErrors())
})


export default connect(mapStateToProp,mapDispatchToProp)(CreateReview)