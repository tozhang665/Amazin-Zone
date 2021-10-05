json.set! :cart do
  json.array! @cart do |cartItem|
    json.extract! cartItem, :id, :title, :description,:price
    json.photoUrl url_for(cartItem.photo)
  end
end

json.set! :products do
  json.array! @products do |product|
    json.extract! product, :id, :user_id,:product_id
  end

end

