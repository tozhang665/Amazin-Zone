import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
      <div>
        Test Home Page
        <Link className="button" to="/login">Sign-in</Link>
      </div>
    )
  }
}

export default Home