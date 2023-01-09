# == Schema Information
#
# Table name: saved_restaurants
#
#  id            :bigint           not null, primary key
#  user_id       :bigint
#  restaurant_id :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class SavedRestaurant < ApplicationRecord

    belongs_to :user

    belongs_to :restaurant

end
