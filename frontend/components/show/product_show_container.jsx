import { connect } from "react-redux";
import { grabProduct } from "../../actions/product";
import { grabProducts } from "../../actions/product";
import ProductShow from "./product_show";
import { AddProductToCart } from "../../actions/cart";

const mapStateToProps = (state,ownProps) =>({
  itemId: ownProps.match.params.id,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch =>({
  grabProduct: (id)=> dispatch(grabProduct(id)),
  grabProducts: ()=> dispatch(grabProducts()),
  addToCart: (product)=>dispatch(AddProductToCart(product))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)