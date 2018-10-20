class AddThematicIdToProblematics < ActiveRecord::Migration[5.2]
  def change
    add_reference :problematics, :thematic, foreign_key: true
  end
end
