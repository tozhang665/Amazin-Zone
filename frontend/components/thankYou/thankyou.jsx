import React from "react";
import NavContainer from "../nav/nav_container";


class ThankYou extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <NavContainer/>



      <div id="thank-you-container">
        <div id="thank-you-center">
          <div id="thank-you-thank-you-text">
            Thank You!
          </div>

          <div id="thank-you-check-out-text">
            You have checked out!
          </div>

          <div id="thank-you-dog-img">
            <img src={window.dog_picture} alt="amazon 404 dog picture" />
          </div>

        </div>

      </div>




      </div>
    )
  }
}

export default ThankYou