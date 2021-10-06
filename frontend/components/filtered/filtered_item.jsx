import React from "react";



class FilteredItem extends React.Component{

  
  render(){
    return(

    <div>
      <img src={this.props.item.photoUrl} alt={this.props.item.title} />
      <br />
      {this.props.item.title}
      <br />
      {this.props.item.description}
      <br />
      {this.props.item.price}
      <br />
    </div>
    )
  }
}

export default FilteredItem