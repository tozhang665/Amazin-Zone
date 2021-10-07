import React from "react";
import StaticRating from "./rating";
import { Link } from "react-router-dom";


class ReviewItem extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: this.props.item.id,
      userId: this.props.item.userId,
      title: this.props.item.title,
      body: this.props.item.body,
      rating: this.props.item.rating,
      reviewer:""
    }
    this.fetchUser(this.state.userId)

    this.checkCurrentUser = this.checkCurrentUser.bind(this)
  }

  checkCurrentUser(){

    if(this.props.currentUser){
      if(parseInt(this.props.currentUser.id) === this.state.userId){
      return(
        <div id="review-item-edit-button">
          <Link to={`/editReview/${this.state.id}`} className="button" id="review-item-edit-button">Edit Review</Link>
        </div>
      )
    }
    }
    else{
      return(
        <div>
        </div>
      )
    }
  }

  fetchUser(id){
    $.ajax({
      url:`/api/users/${id}`
    }).then((data)=> this.setState({reviewer:data.email}))
  }

  render(){
    let {id,userId,title,body,rating,reviewer} = this.state

    let buttonDiv = this.checkCurrentUser()
    return(
      <div id="review-item-container">


        <div id="review-item-reviewer">
          {reviewer}
          {buttonDiv}
        </div>


        <div id="review-item-rating-title">


          <div id="review-item-rating">
            <StaticRating rating={rating} createdAt={this.props.item.createdAt}/>
          </div>


          <div id="review-item-title">
            {title}
          </div>


        </div>

        <div id="review-item-body">
          {body}
        </div>
        <hr id="show-horizontal-rule"/>
      </div>
    )
  }

}

export default ReviewItem