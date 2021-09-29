class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def post_params
    params.require(:products).permit(:title,:description,:price)
  end
end
