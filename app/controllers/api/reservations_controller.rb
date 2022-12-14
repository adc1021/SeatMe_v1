class Api::ReservationsController < ApplicationController
    wrap_parameters include: User.attribute_names + [:id, :partySize, :date, :time, :restaurantId, :userId]

    def create
        # debugger
        @reservation = Reservation.new(reservation_params)
        # debugger
        if @reservation.save
            render 'api/reservations/show'
        else
            render json: { reservation: nil}
        end

    end

    def show
        # debugger
        @reservation = Reservation.find_by(id: params[:id])

        if !@reservation
            render json: { reservation: nil }
        end
    end

    def index
        # @reservations = Reservation.all
        @reservations = current_user.reservations
        @restaurants = current_user.rest_reservations
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        # debugger
        @reservation.update(reservation_params)

    end

    def destroy
        # debugger
        @reservation = Reservation.find_by(id: params[:id])
        @reservation.delete
    end

    private

    def reservation_params
        params.require(:reservation).permit(:id, :date, :time, :party_size, :restaurant_id, :user_id)
    end
end
