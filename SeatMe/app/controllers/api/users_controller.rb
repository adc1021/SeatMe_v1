class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + [:phoneNumber, :firstName, :lastName]
    before_action :require_logged_out, only: [:create]

    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        # debugger
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number)
        # params.permit(:first_name, :last_name, :email, :phone_number)
    end
end
