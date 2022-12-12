class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null:false
      t.integer :restaurant_id, null:false
      t.datetime :date, null:false
      t.datetime :time, null:false
      t.integer :party_size, null:false

      t.timestamps
    end

    add_foreign_key :reservations, :users, column: :user_id, unique: true
    add_foreign_key :reservations, :restaurants,  column: :restaurant_id, unique: true
    add_index :reservations, [:user_id, :restaurant_id], unique:true
  end
end
