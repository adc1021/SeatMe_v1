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
#  average_rating :integer          not null
#  price_point    :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Restaurant < ApplicationRecord

    has_one_attached :photo

    # has_many_attached :photos

end
