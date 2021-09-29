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
    console.log(this.state);
    return(
      <div id = "item-div">
        {this.state.title}
      </div>
    )
  }
}

export default Item