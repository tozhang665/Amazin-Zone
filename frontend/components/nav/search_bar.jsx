import React from "react";
import { withRouter } from "react-router";


class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state={
      query:""
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleFilter(e){
    e.preventDefault();
    this.props.grabFiltered(this.state.query)
    .then(()=>this.props.history.push(`/filteredIndex/${this.state.query}`))
  }

  render(){
    return(
      <div className = "search">
        <div className ="searchInputs">
          <form action="" className="search-bar-form">
            <input type="text" value={this.state.query} onChange={this.handleInput('query')}  />

            <button id="search-bar-button"onClick={this.handleFilter}> Search </button>
          </form>
        </div>
        <div className="dataResult"> </div>
      </div>
    )
  }
}

export default withRouter(SearchBar)