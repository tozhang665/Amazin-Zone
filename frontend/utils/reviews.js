export const postReview = (productId,review) => $.ajax({
    url: `/api/products/${productId}/reviews`,
    method: 'POST',
    data: {review},
  });


  export const getReview = (reviewId) => $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: 'GET'
  });



  