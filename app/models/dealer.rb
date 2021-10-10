class Dealer < ApplicationRecord
  belongs_to :auction
  has_many :lots, dependent: :destroy
end
