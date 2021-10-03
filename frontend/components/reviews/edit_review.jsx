import React from "react";
import NavContainer from "../nav/nav_container"
import { getReview } from "../../utils/reviews";


class EditReview extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id:0,
      title:"",
      body:"",
      rating:0,
      user_id: this.props.currentUser,
      // review:{}
    }

    getReview(parseInt(this.props.currentReview)).then((data)=>{
      this.setState({id:data.id})
      this.setState({title:data.title})
      this.setState({body:data.body})
      this.setState({rating:data.rating})
      // this.setState({review:data})
      }
    )
  }



  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }


  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.sessionErrors.map((error, i) => (
  //         <li className="login-errors" key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }



  render(){
    // console.log("PROP")
    // console.log(this.props)
    console.log("STATE")
    console.log(this.state)
    return(
      <div>
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
              <textarea id="create-review-written-review"onChange={this.handleInput('body')} value={this.state.body}></textarea>

            </label>
            <br />
            <button className="button login-button">Add Review</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


export default EditReview