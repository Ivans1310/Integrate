class Thematic < ApplicationRecord
  belongs_to :location
  has_many :problematic
end
