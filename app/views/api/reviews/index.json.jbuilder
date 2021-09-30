json.array! @reviews do |review|
  json.extract! review, :id, :user_id, :product_id, :title,:body,:rating,:created_at
end