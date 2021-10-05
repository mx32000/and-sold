class Lot < ApplicationRecord
  belongs_to :dealer
  belongs_to :bidder
  has_one :auction, through: :dealer
end
