class AllowNullBidderForLots < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:lots, :bidder_id, true)
  end
end
