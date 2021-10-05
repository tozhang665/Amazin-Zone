import React from "react";
import NavContainer from "../nav/nav_container"
import ProductItem from "./product_item";
import ReviewContainer from "../reviews/reviews_container";
import { Link } from "react-router-dom";
import ProductItemContainer from "./product_item_container";



class ProductShow extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      product: {}
    }
  }

  componentDidMount(){
    this.props.grabProduct(this.props.itemId).then(data=>this.setState({product: data.product}))
  }

  render(){



    if(!this.state.product.price){
      return(
        <div>
          <NavContainer/>
        </div>
      )
    }else{
      let{price,title,description,photoUrl,id} = this.state.product
      return(
        <div>
          <NavContainer/>
          <div id="product-show-container">
            <div id="show-to-product-container">
              <ProductItemContainer currentUser={this.props.currentUser} product={this.state.product} id={id} price={price} title={title} description={description} photoUrl={photoUrl} addToCart={this.props.addToCart}/>
            </div>

            <hr id="show-horizontal-rule"/>

            <div id="product-show-review-statistics-container">
                <div id="product-show-statistics">
                  <Link className="button"to= {`/createReview/${this.props.itemId}`}>Create a Review</Link>
                </div>


                <div id="product-show-review-container">
                  <div id="product-show-review-text">
                    Reviews
                  </div>
                  <ReviewContainer itemId={this.props.itemId}/>
                </div>

            </div>
          </div>
        </div>
      ) 
    }
  }
}

export default ProductShow