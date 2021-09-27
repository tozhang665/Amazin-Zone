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
        <header className="home-title">
          <p>
          Amazin'Zone
          </p>
          <div>
          <Link className="button" to="/login">Sign-in</Link>
          <Link className="button" to="/signup">Sign-up</Link>
          </div>
        </header>
      )
    }else{
      return(
        <header className="home-title">
          <p>
          Amazin'Zone
          </p>
          <div>
          <button className="button" onClick={()=>logout()}>Log-Out</button>
          </div>
        </header>
      )
    }
  }
}

export default Home