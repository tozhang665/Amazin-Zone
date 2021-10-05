import { ADD_TO_CART } from "../actions/cart";


const cartsReducer = (state= {},action)=>{
  Object.freeze(state);

  switch(action.type){
    case(ADD_TO_CART):
      // let obj = {[Object.keys(state).length] : action.product}
      let newState = Object.assign({},state)
      newState[action.product.id] = action.product
      return newState
    default:
      return state
  }
}

export default cartsReducer