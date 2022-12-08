class Api::RestaurantsController < ApplicationController

  def show
    @restaurant = Restaurant.find_by(id: params[:id]) if params[:id]

    if @restaurant
      render 'api/restaurants/show'
    else
      render json: { restaurant: nil }
    end
  end

  # def index
  #   @restaurants = Restaurant.find_by(cuisine: restaurant_params[:cuisine]) if restaurant_params[:cuisine]

  #   if @restaurants
  #     render 'api/restaurants/index'
  #   else
  #     render json: { restaurant: nil }
  #   end
  # end

  # def create
  #   @restaurant = Restaurant.new()
  # end

  def destroy
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisine)
  end

end
