class Problematic < ApplicationRecord
  validates :nombre_pr,  presence: true

  belongs_to :location
  has_many :solution
  has_one_attached :image
  
end
