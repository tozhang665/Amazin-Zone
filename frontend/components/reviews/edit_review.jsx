import React from "react";
import NavContainer from "../nav/nav_container"
import { getReview,editReview,deleteReview } from "../../utils/reviews";


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
      this.setState({id: parseInt(data.id)})
      this.setState({title:data.title})
      this.setState({body:data.body})
      this.setState({rating:parseInt(data.rating)})
      // this.setState({review:data})
      }
    )




    this.handlePost = this.handlePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }



  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handlePost(){
   console.log(this.state.id)
    editReview(parseInt(this.state.id),this.state).then(()=>this.props.history.goBack())
  }

  handleDelete(){
    deleteReview(parseInt(this.state.id)).then(()=>this.props.history.goBack())
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
            <input type="number" min="1" max="5" value={this.state.rating} onChange={this.handleInput('rating')}/>
            </label>
            <br />
            <label className="create-review-label-styling"> Add a written review
              <br />
              <textarea id="create-review-written-review"onChange={this.handleInput('body')} value={this.state.body}></textarea>

            </label>
            <br />
            <button className="button login-button" onClick={this.handlePost}>Edit Review</button>
            <button className="button login-button" onClick={this.handleDelete}>Delete Review</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


export default EditReview