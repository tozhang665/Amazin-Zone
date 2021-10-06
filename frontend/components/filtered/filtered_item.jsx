import React from "react";
import { Link } from "react-router-dom";



class FilteredItem extends React.Component{

  
  render(){
    return(

    <div>
      <Link to={`/products/${this.props.item.id}`} id="item-desc-link">
            
            <div >
              <img id="filtered-item-img"src={this.props.item.photoUrl} alt={this.props.item.title} />
            </div>
            <br />
            {this.props.item.title}
            <br />
            {this.props.item.description}
            <br />
            
      </Link>
        {this.props.item.price}
        <br />


    </div>
    )
  }
}

export default FilteredItem