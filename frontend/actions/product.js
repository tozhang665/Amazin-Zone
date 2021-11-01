import * as productUtil from "../utils/products"
import { receiveErrors } from "./session"


export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"



const receiveAllProducts = payload =>({
  type: RECEIVE_ALL_PRODUCTS,
  payload
})


const receiveProduct = product =>({
  type: RECEIVE_PRODUCT,
  product
})



export const grabProducts = () => dispatch => productUtil.fetchProducts()
.then(
  (payload) => dispatch(receiveAllProducts(payload)),
  (err)=>dispatch(receiveErrors(err.responseJSON))
);

export const grabProduct = (id) => dispatch => productUtil.fetchProduct(id)
.then(
  (product)=>dispatch(receiveProduct(product)),
  (err) => dispatch(receiveErrors(err.responseJSON))
);


export const grabFiltered = (term) => dispatch => productUtil.filterProducts(term)
.then(
  (payload) => dispatch(receiveAllProducts(payload)),
  (err)=> dispatch(receiveErrors(err.responseJSON))
)


