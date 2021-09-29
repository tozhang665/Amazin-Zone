import React from "react";


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
    // console.log(this.state);
    return(
      <div id = "item-div">
        <div id="item-title">
          {this.state.title}
        </div>
        <br />
        <div id="item-img-div">
          <img id="item-img"src={this.state.photoUrl} alt="" />
        </div>

        <div id="item-desc-div">
          <a href="" id = "item-desc">{this.state.description}</a>
        </div>
      </div>
    )
  }
}

export default Item