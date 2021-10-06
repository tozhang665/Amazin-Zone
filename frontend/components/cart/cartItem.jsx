import React from "react";
import { Redirect } from "react-router";
import { deleteItemFromCart } from "../../utils/cart";

class CartItem extends React.Component{
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id){
    deleteItemFromCart(id).then(()=>window.location.reload(false))
  }

  render(){
    // console.log(this.props.item)
    // console.log(this.props.cartId)
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
            <button id="cart-item-delete-button"onClick={()=>this.handleDelete(this.props.cartId.id)}>
              delete
            </button>
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
      // <div>
      //   <div id="">
      //     {this.props.item.title}
      //     {this.props.item.description}
      //     {this.props.item.price}
      //     {this.props.item.photoUrl}

      //     <img src={this.props.item.photoUrl} alt="" />
      //   </div>
      // </div>