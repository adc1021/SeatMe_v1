@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    json.photoUrl url_for(restaurant.photo)
    json.imageUrls restaurant.images.map { |file| url_for(file) }
  end
end
