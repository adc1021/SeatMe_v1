@restaurants.each do |restaurant|
  json.set! restaurant.id do
    # debugger
    json.partial! 'restaurant', restaurant: restaurant
    json.photoUrl url_for(restaurant.photo)
  end
end
