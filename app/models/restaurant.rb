# == Schema Information
#
# Table name: restaurants
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text             not null
#  cuisine        :text             not null
#  address        :string           not null
#  tables         :integer          not null
#  menu           :text             not null
#  average_rating :float            not null
#  price_point    :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  phone_number   :string
#  neighborhood   :string
#
class Restaurant < ApplicationRecord

    # has_one_attached :photo
    has_many_attached :photos

    has_many :saves
    has_many :reviews

    has_many :users,
    through: :saves


end
