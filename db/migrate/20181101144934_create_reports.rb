class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.references :location, foreign_key: true
      t.string :nombre_re
      t.string :descripcion_re
      t.integer :like_re
      t.string :categoria_re
      t.string :usuario

      t.timestamps
    end
  end
end
