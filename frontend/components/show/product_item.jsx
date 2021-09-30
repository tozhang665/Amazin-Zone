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
          <div>
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
          <div id="product-body-price-cost-symbol"> & </div>
          <div id="product-body-price-cost-text">Free returns</div>
          <br />
          <br />
          button to add to card

        </div>
      </div>
    
    </div>
    )
  }
}

export default productItem