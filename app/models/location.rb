class Location < ApplicationRecord
  has_many :user
  has_many :problematic
  has_many :report
  has_many :poll

end
