class Reservation < ApplicationRecord
    validates :party_size, :date, :time, presence: true

    belongs_to :user 
end
