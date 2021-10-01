export const postReview = (productId,review) => $.ajax({
    url: `/api/products/${productId}/reviews`,
    method: 'POST',
    data: {review},
  });
