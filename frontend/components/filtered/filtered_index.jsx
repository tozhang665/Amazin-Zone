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


  componentDidMount(){
    this.props.grabFiltered(this.props.searchTerms)
    .then((data)=> {
      this.setState({items:data.payload})

      }
    )
  }

  render(){
    // window.location.reload(false)
    return(
      <div>
        <NavContainer/>
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


export default withRouter(FilteredIndex)