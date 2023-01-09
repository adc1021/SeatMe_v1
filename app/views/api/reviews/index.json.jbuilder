json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'reviews', review: review
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
