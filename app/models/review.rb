# == Schema Information
#
# Table name: reviews
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  restaurant_id   :integer          not null
#  comment         :text             not null
#  overall_rating  :integer          not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambience_rating :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Review < ApplicationRecord

    belongs_to :user

    belongs_to :restaurant
end
