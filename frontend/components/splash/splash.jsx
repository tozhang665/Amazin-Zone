import React from "react";
import NavContainer from "../nav/nav_container"
import Item from "./item";
import Footer from "./footer";


class Splash extends React.Component{
  constructor(props){
    super(props)
    this.state = {products: []}

    this.props.grabProducts().then(data=>this.setState({products: this.shuffleArray(data.payload)}))
  }

  shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

  render(){
    let {products} = this.state;
    let selectedProducts = products.slice(0,8)
    return(
      <div>
        <div>
         <NavContainer/>
        </div>

        <div id="splash-container">
          <div id="main_splash_container">
            <img id="main_splash_logo" src={window.main_splash} alt="main_logo" />
            <div id="gradient">
            </div>
          </div>
            <div id= "item-container">
                {selectedProducts.map((ele,idx)=>{
                  return(<Item key={idx} product={ele}/>)
                })}                 
            </div> 

        </div>
        <Footer/>
      </div>
    )
  }
}



export default Splash