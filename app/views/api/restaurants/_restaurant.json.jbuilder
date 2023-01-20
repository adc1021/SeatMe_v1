json.extract! restaurant, :id, :name, :description, :cuisine, :address, :tables,
:menu, :average_rating, :price_point, :phone_number, :neighborhood

if restaurant.photos.length != 0
    json.photoUrls restaurant.photos.map{ |file| url_for(file)}
end
