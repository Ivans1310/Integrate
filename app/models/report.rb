class Report < ApplicationRecord
  validates :nombre_re,  presence: true
  belongs_to :location
  has_one_attached :image
end
