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


  componentWillUnmount(){
    this.props.resetErrors();
  }


  render(){
    console.log(this.state)
    return(
      <div>
        <NavContainer/>
          <form action="">

          <label> Title:
          <input type="text" value={this.state.title} onChange={this.handleInput('title')}/>
          </label>


          <label> body:
          <input type="text" value={this.state.body} onChange={this.handleInput('body')}/>
          </label>

          <label> rating:
          <input type="number" min="0" max="5" value={this.state.rating} onChange={this.handleInput('rating')}/>
          </label>

          <button className="button login-button" onClick={this.handlePost}>Post</button>
          </form>
      </div>
      )
  }
}


export default CreateReview