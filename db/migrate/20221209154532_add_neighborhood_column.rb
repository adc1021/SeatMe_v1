class AddNeighborhoodColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :neighborhood, :string 
  end
end
