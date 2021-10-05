class CreateBidders < ActiveRecord::Migration[6.1]
  def change
    create_table :bidders do |t|
      t.string :name
      t.integer :number
      t.boolean :tax_exempt
      t.string :phone_number
      t.string :email
      t.string :address
      t.references :auction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
