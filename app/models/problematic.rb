class Problematic < ApplicationRecord
  validates :nombre_pr,  presence: true
  
  belongs_to :thematic

end
