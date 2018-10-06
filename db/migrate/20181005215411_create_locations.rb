class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.integer :num_loc
      t.string :nombre_loc

      t.timestamps
    end
  end
end
