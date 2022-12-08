class ChangeRatingType < ActiveRecord::Migration[7.0]
  def change
    change_column :restaurants, :average_rating, :float
  end
end
