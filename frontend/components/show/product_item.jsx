import React from "react";
import { render } from "react-dom";
import { add } from 'date-fns';
import { addToCart } from "../../utils/cart";
import { useHistory } from "react-router";


class productItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      title: this.props.product.title,
      price: this.props.product.price,
      description: this.props.product.description,
      photoUrl: this.props.product.photoUrl
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }


  handleAddToCart(){
    this.props.addToCart(this.state);

    // const history = useHistory()
    
    if(this.props.currentUser){
      addToCart(this.props.currentUser.id, this.props.product.id)
      // console.log(this.props.product.id)
      console.log(this.props)
      // this.props.history.push(`/products/${this.props.product.id}`)
      // history.go(0)
      // console.log(history)

      console.log(this.props)


    }else{
      console.log("logged out")
    }
  }


  render(){
    console.log(this.props)

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    let today = new Date()
    let shortDelivery = add(today,{days:3})
    let longDelivery = add(today,{weeks:1})
    let longMonth = monthNames[longDelivery.getMonth()]
    let longDay = longDelivery.getDate()
    let shortMonth = monthNames[shortDelivery.getMonth()]
    let shortDay = shortDelivery.getDate()


    let {title,price,description,photoUrl} = this.state
    return(
    <div id="product-container">

      <div id="product-img-container">
        <img id="product-img" src={photoUrl} alt={title} />
      </div>

      <div id="product-body-container">
        <div id="product-body-title">
          {title}
        </div>
        <br />
        <div id="product-body-price">
          <div id="product-body-price-label">Price: </div>
          <p id="product-body-price-cost"> ${price} </p>
          <div id="product-body-price-cost-symbol"> & </div>
           <div id="product-body-price-cost-text">Free returns</div>
        </div>
        <br />
        <div id="product-body-description">
          <div id="product-body-description-title">
            About this item:
          </div>
          <ul id="product-body-description-ul">

            <li id="product-body-description-li">
              {description}
            </li>
            
            <li id="product-body-description-li">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </li>

            <li id="product-body-description-li">
              At sit nesciunt ipsa laudantium corporis maiores, commodi numquam cupiditate exercitationem 
            </li>

            <li id="product-body-description-li">
              quas magni nulla explicabo id sint temporibus, neque veritatis consequuntur enim beatae quaerat ipsum sunt. Iure excepturi nobis placeat,
            </li>

            <li id="product-body-description-li">
              eligendi omnis cum aperiam deserunt sit tempora facilis a vel hic eius.
            </li>

          </ul>
        </div>
        <br />
      </div>


      <div id="product-purchase-container">
        <div id="product-purchase-border">
          <p id="product-body-price-cost"> ${price} </p>
          <div id="product-purchase-shipping-description">
            <div id="product-purchase-shipping-description-long">
              <div><div id="product-purchase-shipping-description-free-delivery">FREE delivery </div><strong>{longMonth} {longDay}</strong></div>  
            </div>
            
            <div id="product-purchase-shipping-description-short">
            <p>Or fastest delivery <strong>{shortMonth} {shortDay}</strong>. Order within 1hr 40 mins</p>
            </div>

            <div id="product-purchase-button-container">
              <button className="product-purchase-button" id="product-purchase-cart-button" onClick={this.handleAddToCart}>Add To Cart</button>
            </div>

            <div id="product-purchase-button-container">
              <button className="product-purchase-button" id="product-purchase-buy-button">Buy Now</button>
            </div>


          </div>

        </div>
      </div>
    
    </div>
    )
  }
}

export default productItem