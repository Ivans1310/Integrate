class Poll < ApplicationRecord
  belongs_to :location
  acts_as_votable
end
