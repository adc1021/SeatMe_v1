class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :restaurant_id, null:false
      t.text :comment, null:false
      t.integer :overall_rating, null:false
      t.integer :food_rating, null:false
      t.integer :service_rating, null:false
      t.integer :ambience_rating, null:false

      t.timestamps
    end
    add_index :reviews, [:user_id, :restaurant_id], unique: true
  end
end
