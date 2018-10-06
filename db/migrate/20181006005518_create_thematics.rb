class CreateThematics < ActiveRecord::Migration[5.2]
  def change
    create_table :thematics do |t|
      t.references :location, foreign_key: true
      t.string :nombre_te

      t.timestamps
    end
  end
end
