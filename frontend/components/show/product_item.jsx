import React from "react";
import { render } from "react-dom";


class productItem extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      photoUrl: this.props.photoUrl
    }
  }
  render(){
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
          {description}
        </div>
        <br />
      </div>


      <div id="product-purchase-container">
        button to add to card
      </div>
    
    </div>
    )
  }
}

export default productItem