class Api::CartController < ApplicationController

  
  
  
  def create
    cart = CartItem.new(cart_params)
    if cart.save
      render json:cart
    else
      render json:["Something went wrong"],status:401
    end
  end
  
  def show
    user = User.find(params[:id])
    @cart = user.cart_products
    @products = user.cart_items
    render :show
  end


  def destroy
    cartItem = CartItem.find(params[:id]).destroy
    render json: cartItem

  end


  private
  def cart_params
    params.require(:cart).permit(:user_id,:product_id)
  end

end
