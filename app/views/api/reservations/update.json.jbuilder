json.reservation do
    json.extract! @reservation, :date, :time, :party_size,
    :restaurant_id, :user_id
end
