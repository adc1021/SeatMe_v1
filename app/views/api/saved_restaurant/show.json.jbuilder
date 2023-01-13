json.saved_restaurant do
debugger
    json.extract! @saved_restaurant, :restaurant_id, :user_id
end
