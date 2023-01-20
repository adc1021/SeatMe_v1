class Api::ReviewsController < ApplicationController
    wrap_parameters include: User.attribute_names + [:id, :restaurantId, :userId,
    :comment, :overallRating, :foodRating, :serviceRating, :ambienceRating, :commentorFirstName, :commentorLastName]

    def create
        @review = Review.new(review_params)
        if @review.save
            render json: "success!"
        else
            render json: { review: nil }
        end
    end

    def index
        # debugger
        @restaurant = Restaurant.find_by(id: params[:restaurant_id])
        if @restaurant
           @reviews = @restaurant.reviews
        else
            render json: { reviews: nil }
        end
    end

    def show
        @review = Review.find_by(id: params[:id])

        if !@review
            render json: { review: nil }
        end
    end

    def destroy

    end

    def update
        @review = Review.find_by(id: params[:id])
        @review.update(review_params)
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.delete
    end

    private
    def review_params
        params.require(:review).permit(:id, :restaurant_id, :user_id, :comment,
        :overall_rating, :food_rating, :service_rating, :ambience_rating,
        :commentor_first_name, :commentor_last_name )
    end
end
