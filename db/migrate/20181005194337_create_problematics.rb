class CreateProblematics < ActiveRecord::Migration[5.2]
  def change
    create_table :problematics do |t|
      t.string :nombre_pr
      t.text :descripcion_pr
      t.boolean :te_perjudica

      t.timestamps
    end
  end
end