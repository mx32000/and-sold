class Bidder < ApplicationRecord
  belongs_to :auction
  has_many :lots, dependent: :nullify
end
