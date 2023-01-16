json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'reviews', review: review
    end
  end
end
json.restaurant do
    json.extract! @restaurant, :id, :name, :description, :cuisine, :address,
    :tables, :menu, :average_rating, :price_point
    json.photoUrl url_for(@restaurant.photo)
end
