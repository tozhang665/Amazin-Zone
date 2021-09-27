class SessionsController < ApplicationController
  before_action :redirect_if_logged_in, except: :destroy

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
    else
      @user = User.new
      flash.now[:errors] = { base: ['Invalid email or password'] }
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

 private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
