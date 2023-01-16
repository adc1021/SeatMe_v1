class RemoveUserNameColumn < ActiveRecord::Migration[7.0]
  def change

    remove_column :reviews, :first_name
    remove_column :reviews, :last_name
  end
end
