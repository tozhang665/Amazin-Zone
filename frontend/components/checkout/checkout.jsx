import React from "react";
import NavContainer from "../nav/nav_container";
import { fetchCart } from "../../utils/cart";
import CartItem from "../cart/cartItem";

class Checkout extends React.Component{
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
    console.log(this.props)
    console.log(this.state)
    return(
      <div>
        <NavContainer/>
        <div>
          {(this.state.items.cart).map((ele,idx)=>(
              <CartItem key={idx} item={ele} cartId={this.state.items.products[idx]}/>
            ))}
        </div>
      </div>
    )
  }

}

export default Checkout


