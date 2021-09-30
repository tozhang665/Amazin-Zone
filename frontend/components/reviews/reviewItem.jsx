import React from "react";


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
    // console.log(userId)
    console.log(reviewer)
    return(
      <div>
        id
        {userId}
        <br />
        reviewer
        {reviewer}
        <br />
        title
        {title}
        <br />
        body
        {body}
        <br />
        rating
        {rating}
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }

}

export default ReviewItem