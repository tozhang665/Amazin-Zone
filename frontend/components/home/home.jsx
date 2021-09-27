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
          <div id="navbar">
            <div id="nav-belt">
              <div id="nav-left">
              Amazin'Zone
              </div>

              <div id="nav-fill">
                <input type="text" />
              </div>
              <div id="nav-right">
              <Link className="button" to="/login">Sign-in</Link>
              <Link className="button" to="/signup">Sign-up</Link>
              </div>
            </div>
          </div>
        </header>
      )
    }else{
      return(
        <header className="home-title">
          <p>
          Amazin'Zone
          </p>
          <div>Hello {currentUser.email}</div>
          <br />
          <div>
          <button className="button" onClick={()=>logout()}>Log-Out</button>
          </div>
        </header>
      )
    }
  }
}

export default Home