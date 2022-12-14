json.reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'reservations', reservation: reservation
    end
  end
end
json.restaurants do
  @restaurants.each do |rest|
    json.set! rest.id do
      json.partial! 'api/restaurants/restaurant', restaurant: rest 
    end
  end
end
