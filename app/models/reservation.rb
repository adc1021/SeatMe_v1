class Reservation < ApplicationRecord
    validates :party_size, :date, :time, presence: true
end
