class RestaurantsController < ApplicationController

    def show
        @restaurant = Restaurant.find_by(id: params[:id]) if params[:id]
        if @restaurant
          render :show
        else
          render json: { restaurant: nil }
        end

    end

end
