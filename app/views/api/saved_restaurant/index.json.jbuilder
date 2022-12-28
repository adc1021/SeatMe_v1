json.saved_restaurant do
  @saved_restaurants.each do |saved_restaurant|
    json.set! saved_restaurant.id do
      json.partial! 'saved_restaurant', saved_restaurant: saved_restaurant
    end
  end
end

