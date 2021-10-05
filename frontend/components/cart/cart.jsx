import React from "react";
import NavContainer from "../nav/nav_container";
import CartItem from "./cartItem";
import { fetchCart } from "../../utils/cart";

class Cart extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items:{
        cart:[],
        products:[]
      }
    }

    if(this.props.currentUser){
      fetchCart(this.props.currentUser.id).then(data=> this.setState({items:data}))
    }
  }


  render(){
    // console.log(this.state)

    // let price = this.state.cart.reduce((a,b)=> a.price + b.price,0)
    // console.log(this.state.cart)
    // console.log(price)
    // console.log(this.state.items)
    return(
      <div>
        <NavContainer/>


        <div id="shopping-cart-container">
          <div id="shopping-cart-title">
            Shopping Cart
          </div>
          <div id="shopping-cart-price">
            Price
          </div>
        </div>

        {(this.state.items.cart).map((ele,idx)=>(
          <CartItem key={idx} item={ele} cartId={this.state.items.products[idx]}/>
        ))}

      </div>
    )
  }
}


export default Cart