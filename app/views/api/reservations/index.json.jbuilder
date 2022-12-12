@reservations.each do |reservation|
  json.set! reservation.id do
    json.partial! 'reservations', reservation: reservation
  end
end
