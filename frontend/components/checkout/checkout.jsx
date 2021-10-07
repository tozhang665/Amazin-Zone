import React from "react";
import NavContainer from "../nav/nav_container";
import { fetchCart,clearCart } from "../../utils/cart";
import CartItem from "../cart/cartItem";
import { withRouter } from "react-router";


class Checkout extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      items:{
        cart:[],
        products:[]
      }
    }

    if(this.props.currentUser){
      fetchCart(this.props.currentUser.id).then(data=> this.setState({items:data}))
    }

    this.handleCheckout = this.handleCheckout.bind(this)    
  }


  handleCheckout(){
  console.log(this.props.currentUser.id)
  let curID = this.props.currentUser.id
    // clearCart(this.props.currentUser.id).then((ele)=>{
    //   console.log(ele)
    // }
    clearCart(curID).then((ele) =>{
      alert("You have checked out!")
      this.props.history.push("/")})
  }


  render(){
    let items = 0;
    let shipping = 0;
    let total = 0;
    this.state.items.cart.forEach((ele) =>{
      items++;
      shipping = shipping + (ele.price * .09);
      total = total + ele.price
    })
    let tax = total * .08;
    return(
      <div>
        <NavContainer/>
        <div id="checkout-container-2">
          <div id="checkout-centering">

            <div id="checkout-container-spliiter">

            

              <div>
                <div>
                  <h1>
                    Shipping address
                  </h1>
                  <label>Full name(First and Last Name)
                    <br />
                    <input type="text" />
                  </label>
                  <br />
                  <label htmlFor="">Address
                    <br />
                    <input type="text" placeholder={"Street address or P.O Box"}/>
                    <br />
                    <input type="text" placeholder={"Apt, suite, unit, building, floor,etc."}/>
                  </label>

                  <div id="city-state-zip-divier">
                    <div>
                      <label>City 
                        <br />
                        <input type="text" />
                      </label>
                    </div>

                    <div>
                      <label>State 
                        <br />
                        <input type="text" />
                      </label>
                    </div>


                    <div>
                      <label>ZipCode
                        <br />
                        <input type="text" />
                      </label>
                    </div>

                  </div>

                </div>

                <div>
                  <h1>
                    Payment info
                  </h1>
                  <div id="checkout-info-splitter">
                    <div>Card Number</div>
                    <input type="text" />
                    <div>Name on card</div>
                    <input type="text" />
                    <div>Expiration date</div>
                    <input type="text" />
                    <div>Security Code</div>
                    <input type="text" />
                  </div>
                </div>









                <div>
                  {(this.state.items.cart).map((ele,idx)=>(
                    <CartItem key={idx} item={ele} cartId={this.state.items.products[idx]}/>
                    ))}
                </div>
              </div>

              <div>
                <h1>Order Summary</h1>
                <div id="order-summary-container">
                    <div>Items({items}):</div>
                    <div>{total.toFixed(2)}</div>
                    <div>Shipping & handling</div>
                    <div>${shipping.toFixed(2)}</div>
                    
                    <div>Total before tax:</div>
                    <div>${(total + shipping).toFixed(2)}</div>
                    <div>Estimated tax to be collected:*</div>
                    <div>${tax.toFixed(2)}</div>

                    <div>Order total:</div>

                    <div>${(total + shipping + tax).toFixed(2)}</div>

                </div>
                <button onClick={this.handleCheckout}>Check Out</button>
              </div>

            </div>       
          </div>
        </div>

      </div>
    )
  }

}

export default withRouter(Checkout)


