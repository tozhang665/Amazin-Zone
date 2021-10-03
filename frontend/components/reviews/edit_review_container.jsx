import { connect } from "react-redux";
import EditReview from "./edit_review";
import { resetErrors } from "../../actions/session";



const mapStateToProp = (state,ownProps) =>({
  currentUser: state.session.currentUser.id,
  currentReview: ownProps.match.params.review_id,
  sessionErrors: state.errors.sessionErrors
})

const mapDispatchToProp = dispatch =>({
  resetErrors: () => dispatch(resetErrors())
})

export default connect(mapStateToProp,mapDispatchToProp)(EditReview)