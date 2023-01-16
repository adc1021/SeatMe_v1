json.saved_restaurant do
    json.extract! @saved_restaurant, :id, :restaurant_id, :user_id
end
