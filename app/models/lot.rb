class Lot < ApplicationRecord
  belongs_to :dealer
  belongs_to :bidder, optional: true
  has_one :auction, through: :dealer
end
