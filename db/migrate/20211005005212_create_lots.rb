class CreateLots < ActiveRecord::Migration[6.1]
  def change
    create_table :lots do |t|
      t.integer :number
      t.text :description
      t.float :price
      t.references :dealer, null: false, foreign_key: true
      t.references :bidder, null: false, foreign_key: true
      t.references :auction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
