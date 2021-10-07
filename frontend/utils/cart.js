export const addToCart = (user_idd,product_idd) => $.ajax({
    url: '/api/cart',
    method: 'POST',
    data:{cart:{user_id:user_idd,product_id:product_idd}}
  });


export const fetchCart = (user_id) => $.ajax({
  url: `/api/cart/${user_id}`,
  method:'GET'
})


export const deleteItemFromCart = (cartId) => $.ajax({
  url: `/api/cart/${cartId}`,
  method:"DELETE"
})


export const clearCart = (userId)=> $.ajax({
  url: '/api/users/clear',
  method:"GET",
  data:{user_id: userId}
})