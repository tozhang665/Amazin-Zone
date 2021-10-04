export const postReview = (productId,review) => $.ajax({
    url: `/api/products/${productId}/reviews`,
    method: 'POST',
    data: {review},
  });


  export const getReview = (reviewId) => $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'GET'
  });


  export const editReview = (reviewId,review) => $.ajax({
    url: `/api/reviews/${reviewId}`,
    method:"PATCH",
    data:{review}
  })


  export const deleteReview = (reviewId) => $.ajax({
    url: `/api/reviews/${reviewId}`,
    method:"DELETE"
  })

  