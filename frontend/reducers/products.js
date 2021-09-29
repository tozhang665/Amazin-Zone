import { RECEIVE_ALL_PRODUCTS,RECEIVE_PRODUCT } from "../actions/product";

const productsReducer = (state={},action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_PRODUCTS:
      return action.payload
    case RECEIVE_PRODUCT:
      return action.product
    default:
        return state;
  }
}

export default productsReducer