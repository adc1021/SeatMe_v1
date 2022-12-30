class Api::SavedRestaurantController < ApplicationController
    wrap_parameters include: SavedRestaurant.attribute_names + [:userId, :restaurantId]

    def create
        @saved_restaurant = SavedRestaurant.new(saved_params)
        if @saved_restaurant.save
            render :show
        else
            render json: @saved_restaurant.errors.full_messages, status: 422
        end
    end

    def show

    end

    def index
        # debugger
        @saved_restaurants = SavedRestaurant.all
    end

    def destroy
        debugger
        @saved_restaurant = SavedRestaurant.find_by(id: params[:id])
        if @saved_restaurant
            @saved_restaurant.delete
        end
    end


    private

    def saved_params
        params.require(:saved_restaurant).permit(:user_id, :restaurant_id)
    end
end
