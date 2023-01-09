# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  date          :datetime         not null
#  time          :datetime         not null
#  party_size    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Reservation < ApplicationRecord
    validates :party_size, :date, :time, presence: true
    validates :date, comparison: { greater_than: Date.today }
    belongs_to :user

    belongs_to :restaurant
end
