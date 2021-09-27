import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let {currentUser,logout} = this.props
    if (currentUser === null){
      return(
        <div>
          Amazin'Zone
          <Link className="button" to="/login">Sign-in</Link>
          <Link className="button" to="/signup">Sign-up</Link>
        </div>
      )
    }else{
      return(
        <div>
          Amazin'Zone
          <button class="button" onClick={()=>logout()}>Log-Out</button>
        </div>
      )
    }
  }
}

export default Home