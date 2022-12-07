class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :cuisine, null: false
      t.string :address, null: false
      t.integer :tables, null: false
      t.text :menu, null: false
      t.integer :average_rating, null: false
      t.integer :price_point, null: false


      t.timestamps
    end

    add_index :restaurants, :name, unique: true
  end
end
