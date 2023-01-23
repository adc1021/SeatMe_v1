class RemoveIndex < ActiveRecord::Migration[7.0]
  def change
  end

  remove_index(:reviews, :name => 'index_reviews_on_user_id_and_restaurant_id')
end
