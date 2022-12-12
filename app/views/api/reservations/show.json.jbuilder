json.reservation do
    json.extract! @reservation, :date, :time, :party_size
end
