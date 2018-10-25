class CreateSolutions < ActiveRecord::Migration[5.2]
  def change
    create_table :solutions do |t|
      t.string :autor_sol
      t.text :contenido_sol
      t.integer :me_gusta_sol
      t.references :problematic, foreign_key: true

      t.timestamps
    end
  end
end
