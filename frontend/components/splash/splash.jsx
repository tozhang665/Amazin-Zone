import React from "react";
import Nav from "../nav/nav";
import NavContainer from "../nav/nav_container"
import Item from "./item";


class Splash extends React.Component{
  constructor(props){
    super(props)
    this.state = {products: []}

    this.props.grabProducts().then(data=>this.setState({products: this.shuffleArray(data.payload)}))
  }

  shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

  render(){
    let {products} = this.state;
    return(
      <div>
        <div>
         <NavContainer/>
        </div>

        <div id="splash-container">
            <div id= "item-container">
              <div id="gradient">

              </div>
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