class AddSaveStatus < ActiveRecord::Migration[7.0]
  def change
    add_column :saved_restaurants, :status, :boolean, null: false
  end

end
