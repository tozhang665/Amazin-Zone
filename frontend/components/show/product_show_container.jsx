import { connect } from "react-redux";
import { grabProduct } from "../../actions/product";
import { grabProducts } from "../../actions/product";
import ProductShow from "./product_show";

const mapStateToProps = (state,ownProps) =>({
  itemId: ownProps.match.params.id
})

const mapDispatchToProps = dispatch =>({
  grabProduct: (id)=> dispatch(grabProduct(id)),
  grabProducts: ()=> dispatch(grabProducts())
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)