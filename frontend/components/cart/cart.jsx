import React from "react";
import NavContainer from "../nav/nav_container";
import CartItem from "./cartItem";
import { fetchCart } from "../../utils/cart";
import { Link } from "react-router-dom";

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
    let total = 0
    let count = 0
    this.state.items.cart.forEach((ele)=>{
      total = total + ele.price
      count++
    })
    
    return(
      <div>
        <NavContainer/>

        <div id="cart-splitter">

          <div>

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


          <div>
            <div id="checkout-container">
              Subtotal ({count} items): ${total}

              <div id="cart-proceed-to-checkout-button">
                <Link className="cart-redirect-button" id="cart-checkout-redirect-button" to="/checkout">Proceed to checkout</Link>
              </div>
            </div>
          </div>

        </div>

      </div>



    )
  }



}


export default Cart