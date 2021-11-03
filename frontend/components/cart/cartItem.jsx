import React from "react";
import { Redirect } from "react-router";
import { deleteItemFromCart,addToCart } from "../../utils/cart";



class CartItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      amount: this.props.amount,
      cartItems:this.props.cartItems      
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
  }


  handleDelete(){
    let cartItem = this.state.cartItems.find((ele)=>ele.productId === this.props.item.id)
    deleteItemFromCart(cartItem.id)
    let removed = this.state.cartItems.filter((ele)=> ele.id !== cartItem.id)
    this.state.cartItems = removed
  }

  handleAdd(){
    addToCart(this.props.currentUser.id, this.props.item.id)
  }

  changeAmount(){
    let difference = this.state.amount - this.props.amount

    if(difference < 0){
      while(difference < 0){
        this.handleDelete()
        difference++
      }
    }else if(difference > 0){
      for(let i = 0; i < difference; i++){
        this.handleAdd()
      }
    }
    window.location.reload(true)
  }

  updateAmount(event){
    this.setState({amount: parseInt(event.target.value)},()=>this.changeAmount())
  }
  render(){
    return(
      <div id="cart-item">
        <div>
          <img id="cart-item-img" src={this.props.item.photoUrl} alt={this.props.title} />
        </div>

        <div>
          <div id="cart-item-title">
            {this.props.item.title}
          </div> 

          <div id="cart-item-description">
            {this.props.item.description}
          </div>
          <div>
            <select id="amount" name="amount" value={this.state.amount} onChange={this.updateAmount}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

        </div>

        <div>

          <div>
          {this.props.item.price}
          </div>

          <div>
          </div>

        </div>

      </div>
    )
  }
}

export default CartItem
