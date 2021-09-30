class Api::ReviewsController < ApplicationController
  def index
    ink = params[:product_id]

    product = Product.find(params[:product_id])
    @reviews = product.reviews
    render :index
  end

end
