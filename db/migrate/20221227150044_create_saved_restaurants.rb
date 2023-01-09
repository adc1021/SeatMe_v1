class CreateSavedRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :saved_restaurants do |t|
      t.bigint :user_id
      t.bigint :restaurant_id

      t.timestamps
    end
    add_foreign_key :saved_restaurants, :users, column: :user_id, unique: true
    add_foreign_key :saved_restaurants, :restaurants, column: :restaurant_id, unique: true
    add_index :saved_restaurants, [:user_id, :restaurant_id], unique:true
  end
end
