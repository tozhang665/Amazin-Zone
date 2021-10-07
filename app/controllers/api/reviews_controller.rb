class Api::ReviewsController < ApplicationController
  def index
    product = Product.find(params[:product_id])
    @reviews = product.reviews
    render :index
  end


  def create
    review = Review.new(review_params)
    review.product_id = params[:product_id]
    if review.save
      render json: review
    else
      render json: ["something went wrong"],status:401
    end

  end


  def show
    @review = Review.find(params[:id])
    render :show
  end



  def update
    @review = Review.find(params[:id])
    if @review && @review.update_attributes(review_params)
      render :show
    elsif !@review
      render json: ["could not find review"], status:400
    else
      render json: @review.errors.full_messages, status:401
    end
  end


  def destroy
    review = Review.find(params[:id]).destroy
    render json: review
  end

  private
  def review_params
    params.require(:review).permit(:user_id,:title,:body,:rating)
  end


end
