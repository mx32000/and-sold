class Auction < ApplicationRecord
  belongs_to :user
  has_many :dealers
  has_many :bidders
  has_many :lots
end
