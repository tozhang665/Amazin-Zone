import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component{
  constructor(props){
    super(props)
  }

  renderRight(currentUser,logout){

    if(currentUser===null){
      return(
      <div id="nav-right"  className="nav-div">
        <Link className="button" to="/login">Sign-in</Link>
        <Link className="button" to="/signup">Sign-up</Link>
      </div>
    )
    }else{
      console.log(currentUser)
      return(
      <div id="nav-right"  className="nav-div">
        {/* <div id="nav-right-current-user-container">
          <div>
            Hello 
          </div>
          <div id="nav-right-current-user-email">
            {currentUser.email}
          </div>
        </div> */}
        <button className="button" onClick={()=>logout()}>Log-Out</button>
      </div>
    )
    }
  }


  render(){
    let {currentUser,logout} = this.props
      return(
        <header className="home-title">

          <div id="navbar">

            <div id="nav-belt">

              <div id="nav-left" className="nav-div">
              {/* <Link className="mainLogo-link"to="/"><img id="main-logo" src={window.main_logo} alt="main logo" /></Link> */}
              <Link className="logo-link" to="/">Amazin'Zone</Link>
              </div>

              <div id="nav-fill"  className="nav-div">
                <input type="text" />
              </div>

              {this.renderRight(currentUser,logout)}
            </div>
          </div>
        </header>
      )
  }
}

export default Nav