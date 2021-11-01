import React from "react";
import { Link } from "react-router-dom";
import { fetchCart } from "../../utils/cart";
// import SearchBarContainer from "./search_bar_container";
import {AiOutlineShoppingCart} from "react-icons/ai";


class FilteredNav extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items:{
        cart:[],
        product:[]
      }
    }

    if(this.props.currentUser){
      fetchCart(this.props.currentUser.id).then(data=> this.setState({items:data}))
    }
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
        <div>
        <Link to="/cart" id="tempIDForCart"><AiOutlineShoppingCart id="cart-icon"/> {(this.state.items.cart).length} </Link>
        
        </div>
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
              <Link className="logo-link" to="/">Amazin'Zone</Link>
              </div>




              <div id="nav-fill"  className="nav-div">
                {/* <input type="text" /> */}
                {/* <SearchBarContainer/> */}
                <div id="found-items-title">
                  Found Items
                </div>
              </div>


        


              {this.renderRight(currentUser,logout)}
            </div>
          </div>
        </header>
      )
  }
}

export default FilteredNav