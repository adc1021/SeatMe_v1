class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names

    

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end
end
