import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


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
    // console.log(this.state.query)
    // this.props.grabFiltered(this.state.query)
    // .then(()=>this.props.history.push(`/filteredIndex/${this.state.query}`))
    console.log(this.state.query)
    if(this.state.query ===""){
      this.props.history.push(`/filteredIndex/${" "}`)
    }else{
      this.props.history.push(`/filteredIndex/${this.state.query}`)
    }
  }

  render(){
    return(
      <div className = "search">
        <div className ="searchInputs">
          <form action="" className="search-bar-form">
            <input type="text" value={this.state.query} onChange={this.handleInput('query')}  placeholder="Search" />

            {/* <button id="search-bar-button"onClick={this.handleFilter}> Search </button> */}
            <Link to={`/filteredIndex/${this.state.query} `} id="search-bar-button">Search</Link>
          </form>
        </div>
        <div className="dataResult"> </div>
      </div>
    )
  }
}

export default withRouter(SearchBar)