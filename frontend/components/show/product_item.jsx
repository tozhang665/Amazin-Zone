import React from "react";
import { render } from "react-dom";


class productItem extends React.Component{

  constructor(props){
    this.props;

    this.state = {
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      photoUrl: this.props.photoUrl
    }

  }

  render(){

  }
}