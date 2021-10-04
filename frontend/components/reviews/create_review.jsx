import React from "react";
import NavContainer from "../nav/nav_container";
import { postReview } from "../../utils/reviews";


class CreateReview extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      title:"",
      body:"",
      rating:0,
      user_id: this.props.currentUser
    }


    this.handlePost = this.handlePost.bind(this);
  }


  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }


  handlePost(){
    postReview(this.props.currentProduct,this.state).then(()=>this.props.history.push(`/products/${this.props.currentProduct}`))
  }


  renderErrors() {
    return(
      <ul>
        {this.props.sessionErrors.map((error, i) => (
          <li className="login-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  // componentWillUnmount(){
  //   this.props.resetErrors();
  // }

  render(){
    // console.log(this.state)
    return(
      <div>
        <NavContainer/>

        <div id="create-review-container">

          <div id="create-review-inner-container">
            <form>

            <label className="create-review-label-styling"> Add a headline
            <br />
            <input type="text" value={this.state.title} onChange={this.handleInput('title')}/>
            </label>
            <br />
            <label className="create-review-label-styling"> Rating
            <input type="number" min="0" max="5" value={this.state.rating} onChange={this.handleInput('rating')}/>
            </label>
            <br />
            <label className="create-review-label-styling"> Add a written review
              <br />
              <textarea id="create-review-written-review"onChange={this.handleInput('body')} placeholder="What did you like or dislike? What did you use this product for?"></textarea>

            </label>
            <br />
            <button className="button login-button" onClick={this.handlePost}>Add Review</button>
            </form>
          </div>
        </div>
      </div>
      )
  }
}


export default CreateReview