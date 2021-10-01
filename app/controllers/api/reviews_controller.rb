class Api::ReviewsController < ApplicationController
  def index
    product = Product.find(params[:product_id])
    @reviews = product.reviews
    render :index
  end


  def create
    review = Review.new(review_params)
    review.product_id = params[:product_id]
    puts review.product_id
    if review.save
      render json: review
    else
      puts review.errors.full_messages
      render json: review.errors.full_messages,status:422
    end

  end



  private
  def review_params
    params.require(:review).permit(:user_id,:title,:body,:rating)
  end


end
