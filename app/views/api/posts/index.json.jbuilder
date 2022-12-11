json.array! @restaurants do |rest|
  json.extract! rest, :id, :name
  json.photoUrl url_for(rest.photo)
end
