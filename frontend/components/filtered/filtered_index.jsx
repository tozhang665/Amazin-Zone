import React from "react";
import NavContainer from "../nav/nav_container";
import { withRouter } from "react-router";
import FilteredItem from "./filtered_item";




class FilteredIndex extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items: []
    }
  }


  render(){
    if(!Array.isArray(this.props.products)){
      // this.props.history.push("/")
      return(
      <div>
        <NavContainer/>

        Nothing was found


      </div>
    )
    }
    console.log(this.props.products)
    return(
      <div>
        <NavContainer/>
        {this.props.products.map((ele,idx)=>(
          <div key={idx}>

            <FilteredItem item={ele}/>

          </div>
        ))}
      </div>
    )
  }
}


export default withRouter(FilteredIndex)