import React from "react";
import { Link } from "react-router-dom";


class Item extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: props.product.id,
      title: props.product.title,
      description: props.product.description,
      price: props.product.price,
      photoUrl: props.product.photoUrl
    }
  }

  render(){

    return(
      <div id = "item-div">

        <div id="item-title">
          {this.state.title}
        </div>

        

        <div id="item-desc-link">

          <Link to={`/products/${this.state.id}`} id="item-desc-link">
            
            <div id="item-img-div">
              <img id="item-img"src={this.state.photoUrl} alt="" />
            </div>

            <div id="item-div-description">
              {this.state.description}
            </div>
            
            
            </Link>



        </div>
         

      </div>
    )
  }
}

export default Item