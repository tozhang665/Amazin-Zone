class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end



  def search
    query = params[:query]

    @products = Product.where('title ILIKE ? OR description ILIKE ?', "%#{query}%", "%#{query}%")
    
    if @products.length > 0 
      render :index
    else
      # render json: ["No results matching for #{query}"],status:404
      render json: []
    end

  end


  def post_params
    params.require(:products).permit(:title,:description,:price)
  end
end
