# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Lot.destroy_all
Bidder.destroy_all
Dealer.destroy_all
Auction.destroy_all
User.destroy_all

@admin = User.create!(username: 'Chickadee', email: 'chickadee@email.com', name: 'Hantoa Tenwhij', password: '123456', password_confirmation: '123456')

puts "#{User.count} users created"

@auction = Auction.create!(title: '2021 Rock and Mineral Auction', organization: 'Cedar Valley Rocks and Minerals Society', location: 'Amana RV Park and Event Center, 39 38th Ave, Amana, Iowa 52203', status: 'upcoming', portion_collected: 0.25, tax_rate: 0.07, credit_card_fee: 0.0275, dates: 'Saturday, October 9, 9:00am-7:00pm and Sunday, October 10, 9:00am-3:00pm', notes: 'Approximately 1,200 lots from several collections. Minerals, rough, fossils, equipment, and books available. Equipment will sell at 2:00 on Saturday.', user: @admin)

puts "#{Auction.count} auctions created"

def generate_phone_number
  phone_number = ''
  10.times do |j|
    phone_number += rand(10).to_s
    phone_number += '-' if [2, 5].include?(j)
  end
  phone_number
end

# generate dealers
8.times do
  name = Faker::Name.name

  Dealer.create!(name: name, email: Faker::Internet.email(name: name), phone_number: generate_phone_number, address: Faker::Address.full_address, auction: @auction)
end

puts "#{Dealer.count} dealers created"

# generate bidders
12.times do |i|
  name = Faker::Name.name
  Bidder.create!(name: name, number: i + 1, tax_exempt: [true, false].sample, email: Faker::Internet.email(name: name), phone_number: generate_phone_number, address: Faker::Address.full_address, auction: @auction)
end

puts "#{Bidder.count} bidders created"

Dealer.all.each_with_index do |dealer, index|
  5.times do |j|
    Lot.create!(number: 5 * index + j + 1, dealer: dealer)
  end
end

@lot_names = ['geodes', 'calcite', 'slabs', 'quartz', 'minerals', 'misc', 'tiger eye', 'agates']

Dealer.first.lots.each do |lot|
  lot.update(description: @lot_names.sample, price: rand(10..120), bidder: Bidder.all.sample)
end

puts "#{Lot.count} lots created"
