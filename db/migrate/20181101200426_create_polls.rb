class CreatePolls < ActiveRecord::Migration[5.2]
  def change
    create_table :polls do |t|
      t.references :location, foreign_key: true
      t.string :nombre_po
      t.string :pregunta
      t.string :opcion1
      t.string :opcion2
      t.string :opcion3
      t.string :opcion4
      t.string :categoria_po
      t.string :usuario

      t.timestamps
    end
  end
end
