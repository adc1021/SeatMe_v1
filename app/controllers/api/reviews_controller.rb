class Api::ReviewsController < ApplicationController
    wrap_parameters include: User.attribute_names + [:id, :restaurantId, :userId,
    :comment, :overallRating, :foodRating, :serviceRating, :ambienceRating]

    def create
        debugger
        @review = Review.new(review_params)

        if @review.save
            render `/api/reviews/show`
        else
            render json: { review: nil }
        end
    end

    def index
        @reviews = current_user.reviews
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
        :overall_rating, :food_rating, :service_rating, :ambience_rating )
    end
end
