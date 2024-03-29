class Api::RestaurantsController < ApplicationController

  def show
    @restaurant = Restaurant.find_by(id: params[:id]) if params[:id]

    if @restaurant
      # render 'api/restaurants/show'
      # debugger
      render :show
    else
      # debugger
      render json: { restaurant: nil }
    end

  end

  def index
    @restaurants = Restaurant.all
    # if @restaurants
    #   render 'api/restaurants/index'
    # else
    #   render json: { restaurants: nil }
    # end
  end

  # def create
  #   @restaurant = Restaurant.new()
  # end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisine, images: [])
  end

end
