import React from "react";
import { fetchReviews } from "../../utils/products";
import ReviewItem from "./reviewItem";


class Review extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reviews:[]
    }

    fetchReviews(this.props.itemId).then((data)=> this.setState({reviews:data}))
  }
  
  render(){
    // console.log(this.props.currentUser)
    return(
      <div>
        {this.state.reviews.map((ele,idx)=>
          <ReviewItem key={idx} item={ele} currentUser={this.props.currentUser}/>
        )}
      </div>
    )
  }
}

export default Review