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

    def destroy
        @savedRestaurant = SavedRestaurant.find_by(restaurant_id: params[:restaurant_id])
        @savedRestaurant.delete
    end


    private

    def saved_params
        params.require(:saved_restaurant).permit(:user_id, :restaurant_id)
    end
end
