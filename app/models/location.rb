class Location < ApplicationRecord
  has_many :user
  has_many :thematic
end
