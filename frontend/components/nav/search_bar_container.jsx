import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { grabFiltered } from "../../actions/product";


const mapDispatchToProps = dispatch =>({
  grabFiltered: (term)=> dispatch(grabFiltered(term))
})


export default connect(null,mapDispatchToProps)(SearchBar)