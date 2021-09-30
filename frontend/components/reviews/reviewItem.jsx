import React from "react";
import StaticRating from "./rating";


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
  }


  fetchUser(id){
    $.ajax({
      url:`/api/users/${id}`
    }).then((data)=> this.setState({reviewer:data.email}))
  }

  render(){
    let {id,userId,title,body,rating,reviewer} = this.state
    // console.log(this.props.item)
    return(
      <div id="review-item-container">


        <div id="review-item-reviewer">
          {reviewer}
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
      </div>
    )
  }

}

export default ReviewItem