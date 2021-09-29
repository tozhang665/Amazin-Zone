class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def post_params
    params.require(:products).permit(:title,:description,:price)
  end
end
