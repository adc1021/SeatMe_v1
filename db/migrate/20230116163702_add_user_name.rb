class AddUserName < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :firstName, :string, null: false
    add_column :reviews, :lastName, :string, null: false 
  end
end
