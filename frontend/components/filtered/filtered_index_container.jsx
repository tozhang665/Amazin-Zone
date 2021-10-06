import { connect } from "react-redux";
import FilteredIndex from "./filtered_index";


const mapStateToProps = state =>({
  products: state.products
})


export default connect(mapStateToProps,null)(FilteredIndex)

