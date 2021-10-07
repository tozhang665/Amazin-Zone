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
  let curID = this.props.currentUser.id
 
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
                  <h1 className="h1-checkout">
                    Shipping address
                  </h1>
                  <label className="checkout-bolder">Full name(First and Last Name)
                    <br />
                    <input className="checkout-inputs" type="text" />
                  </label>
                  <br />
                  <label className="checkout-bolder">Address
                    <br />
                    <input className="checkout-inputs" type="text" placeholder={"Street address or P.O Box"}/>
                    <br />
                    <input className="checkout-inputs" ype="text" placeholder={"Apt, suite, unit, building, floor,etc."}/>
                  </label>

                  <div id="city-state-zip-divier">
                    <div>
                      <label className="checkout-bolder">City 
                        <br />
                        <input className="checkout-inputs" type="text" placeholder={"San Francisco"}/>
                      </label>
                    </div>

                    <div>
                      <label className="checkout-bolder">State 
                        <br />
                        <input className="checkout-inputs" type="text" placeholder={"CA"}/>
                      </label>
                    </div>


                    <div>
                      <label className="checkout-bolder">ZipCode
                        <br />
                        <input className="checkout-inputs" type="text" placeholder={"00000"} />
                      </label>
                    </div>

                  </div>

                </div>

                <div>
                  <h1 className="h1-checkout">
                    Payment info
                  </h1>
                  <div id="checkout-info-splitter">
                    <div className="checkout-bolder">Card Number</div>
                    <input className="checkout-inputs" type="text" placeholder={"3333 3333 3333 3333"}/>
                    <div className="checkout-bolder">Name on card</div>
                    <input className="checkout-inputs" type="text" placeholder={"John Doe"}/>
                    <div className="checkout-bolder">Expiration date</div>
                    <input className="checkout-inputs" type="text" placeholder={"10/2099"}/>
                    <div className="checkout-bolder">Security Code</div>
                    <input className="checkout-inputs" type="text" placeholder={"000"}/>
                  </div>
                </div>









                <div>
                  {(this.state.items.cart).map((ele,idx)=>(
                    <CartItem key={idx} item={ele} cartId={this.state.items.products[idx]}/>
                    ))}
                </div>
              </div>

              <div id="checkout-payment-info-container">
                <div id="checkout-button-center">
                  <button id="checkout-button-placeyourorder"onClick={this.handleCheckout}>Place Your Order</button>
                </div>


                  <div id="order-summary-container-5">
                    <h1 className="h1-order-summary">Order Summary</h1>
                    <div id="order-summary-information-container">
                        <div>Items({items}):</div>
                        <div>{total.toFixed(2)}</div>
                        <div>Shipping & handling</div>
                        <div id="adding-underline">${shipping.toFixed(2)}</div>
                        
                        <div>Total before tax:</div>
                        <div>${(total + shipping).toFixed(2)}</div>
                        <div>Estimated tax to be collected:*</div>
                        <div>${tax.toFixed(2)}</div>

                        <div id="order-summary-total-red">Order total:</div>

                        <div id="order-summary-total-red">${(total + shipping + tax).toFixed(2)}</div>

                    </div>

                  </div>
              </div>

            </div>       
          </div>
        </div>

      </div>
    )
  }

}

export default withRouter(Checkout)


