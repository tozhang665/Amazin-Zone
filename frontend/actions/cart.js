import { fetchProduct } from "../utils/products"

export const ADD_TO_CART = "ADD_TO_CART"


export const AddProductToCart = (product) => ({
  type: ADD_TO_CART,
  product:product
})


export const AddProduct = (id) => dispatch =>(
  fetchProduct(id).then((product)=> dispatch(AddProductToCart(product)))
)