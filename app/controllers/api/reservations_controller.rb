class Api::ReservationsController < ApplicationController
    wrap_parameters include: User.attribute_names + [:partySize]

    def create
        debugger
        @reservation = Reservation.new(reservation_params)
        if @reservation
            render 'api/reservations/show'
        else
            render json: { reservation: nil}
        end
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
    end

    def index
        # debugger
        @reservations = Reservation.all
    end

    def update
    end

    def destroy
    end

    private

    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size)
    end
end
