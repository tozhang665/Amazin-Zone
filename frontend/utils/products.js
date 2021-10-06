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


export const filterProducts = (searchTerm) => $.ajax({
  url: '/api/products/search',
  method:"GET",
  data:{query: searchTerm}
})