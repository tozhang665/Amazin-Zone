import React from "react";
import NavContainer from "../nav/nav_container"



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
      let{price,title,description,photoUrl} = this.state.product
      return(
        <div>
          <NavContainer/>
          <div>
            {title}
          </div>
          <div>
            {description}
          </div>
          {price}
          <div>
            <img src={photoUrl} alt="" />
            
          </div>
        </div>
      ) 
    }
    
  }
}

export default ProductShow