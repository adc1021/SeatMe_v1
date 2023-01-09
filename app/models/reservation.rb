class Reservation < ApplicationRecord
    validates :party_size, :date, :time, presence: true
    validates :date, comparison: { greater_than: Date.today }
    belongs_to :user

    belongs_to :restaurant
end
