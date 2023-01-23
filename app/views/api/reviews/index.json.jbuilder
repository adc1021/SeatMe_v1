json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.partial! 'reviews', review: review
    end
  end
end

