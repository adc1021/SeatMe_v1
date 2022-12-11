json.restaurant do
    # debugger
    json.extract! @restaurant, :id, :name, :description, :cuisine, :address,
    :tables, :menu, :average_rating, :price_point
    json.photoUrl url_for(@restaurant.photo)
end
