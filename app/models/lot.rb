class Lot < ApplicationRecord
  belongs_to :dealer
  belongs_to :bidder
  belongs_to :auction
end
