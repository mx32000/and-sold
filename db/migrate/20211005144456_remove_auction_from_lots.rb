class RemoveAuctionFromLots < ActiveRecord::Migration[6.1]
  def change
    remove_reference :lots, :auction, null: false, foreign_key: true
  end
end
