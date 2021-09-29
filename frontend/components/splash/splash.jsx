import React from "react";
import Nav from "../nav/nav";
import NavContainer from "../nav/nav_container"
import Item from "./item";


class Splash extends React.Component{
  constructor(props){
    super(props)
    this.fetchProducts = this.fetchProducts.bind(this)

    this.state = {products: []}

    this.fetchProducts().then(data=>this.setState({products: data}))
  }


  fetchProducts = () => $.ajax({
    url: '/api/products',
    method: 'GET'
  });


  render(){
    let {products} = this.state;
    return(
      <div>
        <NavContainer/>

        <div id="splash-container">
            <div id= "item-container">
              {products.map((ele,idx)=>{
                return(<Item key={idx} product={ele}/>)
              })}
            </div>
        </div>
      </div>
    )
  }
}

export default Splash