# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_05_005212) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auctions", force: :cascade do |t|
    t.string "title"
    t.string "location"
    t.string "status"
    t.string "organization"
    t.float "portion_collected"
    t.float "tax_rate"
    t.float "credit_card_fee"
    t.string "dates"
    t.text "notes"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_auctions_on_user_id"
  end

  create_table "bidders", force: :cascade do |t|
    t.string "name"
    t.integer "number"
    t.boolean "tax_exempt"
    t.string "phone_number"
    t.string "email"
    t.string "address"
    t.bigint "auction_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["auction_id"], name: "index_bidders_on_auction_id"
  end

  create_table "dealers", force: :cascade do |t|
    t.string "name"
    t.string "phone_number"
    t.string "email"
    t.string "address"
    t.bigint "auction_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["auction_id"], name: "index_dealers_on_auction_id"
  end

  create_table "lots", force: :cascade do |t|
    t.integer "number"
    t.text "description"
    t.float "price"
    t.bigint "dealer_id", null: false
    t.bigint "bidder_id", null: false
    t.bigint "auction_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["auction_id"], name: "index_lots_on_auction_id"
    t.index ["bidder_id"], name: "index_lots_on_bidder_id"
    t.index ["dealer_id"], name: "index_lots_on_dealer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "auctions", "users"
  add_foreign_key "bidders", "auctions"
  add_foreign_key "dealers", "auctions"
  add_foreign_key "lots", "auctions"
  add_foreign_key "lots", "bidders"
  add_foreign_key "lots", "dealers"
end
