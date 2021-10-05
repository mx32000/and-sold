class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.string :location
      t.string :status
      t.string :organization
      t.float :portion_collected
      t.float :tax_rate
      t.float :credit_card_fee
      t.string :dates
      t.text :notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
