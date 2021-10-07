import React from 'react'


const StaticRating = props => {

    let {rating} = props

    rating = Math.floor(rating)
    let starFilled = (
        <div className="rating-star"id='filled'>
            <img src={window.filled_star}/>
        </div> 
    )
    let starUnfilled = (
        <div className="rating-star"id='unfilled'>
            <img src={window.unfilled_star}/> 
        </div>
    )
    
    let ratingContent = []
    for(let i = 0; i < rating; i++){
        ratingContent.push(starFilled)
    }
    for(let i= 0; i < 5 - rating; i++){
        ratingContent.push(starUnfilled)
    }
    let created = new Date(props.createdAt).toLocaleDateString("en-US")

    return (
    <div id='rating-container'>
      <div id='rating-bar'>
        {ratingContent.map((rating,i) => <div className='rating-wrapper-container' key={i}>{rating}</div>)}
      </div>
      <div>
        created on: {created}
      </div>
    </div>
    )
}

export default StaticRating;