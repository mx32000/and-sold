class Auction < ApplicationRecord
  belongs_to :user
  has_many :dealers
end
