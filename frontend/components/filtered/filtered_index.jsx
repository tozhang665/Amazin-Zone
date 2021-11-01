import React from "react";
import FilteredNavContainer from "./fitlered_nav_container";
import { withRouter } from "react-router";
import FilteredItem from "./filtered_item";




class FilteredIndex extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      terms:this.props.searchTerms,
      items: []
    }
    this.props.grabFiltered(this.props.searchTerms)
    .then((data)=> {
      this.setState({items:data.payload})
      }
    )
  }

  render(){

    if(this.state.items.length === 0){
      return(
        <div>
          <FilteredNavContainer/>
          <div id="filtered-item-component-container">
            Nothing was found in the Database
          </div>
        </div>
      )
    }else{
      return(
        <div>
          <FilteredNavContainer/>
          <div id="filtered-item-component-container">
            <div id="filtered-item-centering">
  
              <div id="filtered-item-container">
  
                {this.state.items.map((ele,idx)=>(
                  <div id="filtered-item-div" key={idx}>
  
                    <FilteredItem item={ele}/>
  
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default withRouter(FilteredIndex)