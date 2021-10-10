class Auction < ApplicationRecord
  belongs_to :user
  has_many :dealers, dependent: :destroy
  has_many :bidders, dependent: :destroy
  has_many :lots, through: :dealers
end
