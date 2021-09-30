export const fetchProducts = () => $.ajax({
    url: '/api/products',
    method: 'GET'
  });

export const fetchProduct = (id) => $.ajax({
  url: `/api/products/${id}`,
  method:'GET'
})

export const fetchReviews = (id) => $.ajax({
  url: `/api/products/${id}/reviews`,
  method:'GET'
})