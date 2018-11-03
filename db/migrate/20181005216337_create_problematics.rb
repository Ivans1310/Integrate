class CreateProblematics < ActiveRecord::Migration[5.2]
  def change
    create_table :problematics do |t|
      t.references :location, foreign_key: true
      t.string :nombre_pr
      t.text :descripcion_pr
      t.integer :te_perjudica
      t.text :categoria_pr
      t.text :usuario




      t.timestamps
    end
  end
end
