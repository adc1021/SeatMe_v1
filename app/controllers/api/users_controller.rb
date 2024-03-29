class Api::UsersController < ApplicationController
    wrap_parameters include: [:phoneNumber, :firstName,:lastName]
    before_action :require_logged_out, only: [:create]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email,
        :phone_number)
    end
end
