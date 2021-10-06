import { connect } from "react-redux";
import FilteredIndex from "./filtered_index";
import { grabFiltered } from "../../actions/product";


const mapStateToProps = (state,ownProps) =>({
  products: state.products,
  searchTerms: ownProps.match.params.search_terms
})

const mapDispatchToProps = dispatch =>({
  grabFiltered: (term)=> dispatch(grabFiltered(term))
})


export default connect(mapStateToProps,mapDispatchToProps)(FilteredIndex)

