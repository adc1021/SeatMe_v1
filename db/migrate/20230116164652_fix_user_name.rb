class FixUserName < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :first_name, :string, null: false
    add_column :reviews, :last_name, :string, null: false

    rename_column :reviews, :firstName, :commentor_first_name
    rename_column :reviews, :lastName, :commentor_last_name
  end
end
