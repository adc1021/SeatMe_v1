json.saved_restaurant do
    json.extract! @saved_restaurant, :restaurant_id, :user_id
end
