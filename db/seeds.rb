# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

GettyObject.delete_all

require 'json'
shanghai = File.read('./db/shanghai.json')
data_hash = JSON.parse(shanghai)
records = data_hash["Response"]["doc"]["record"]

records.each do |record|
  GettyObject.create!(
    culture: record["Culture"],
    date: record["Date"],
    department: record["Department"],
    dimensions: record["Dimensions"],
    maker_name: record["MakerName"],
    object_number: record["ObjectNumber"],
    place: record["Place"],
    primary_title: record["PrimaryTitle"],
    record_ID: record["recordID"],
    record_link: record["recordLink"],
    source: record["Source"],
    record_type: record["Type"],
    image_thumb_URI: record["imageThumbURI"],
    medium: record["Medium"]
  )
end

beijing = File.read('./db/beijing.json')
data_hash = JSON.parse(beijing)
records = data_hash["Response"]["doc"]["record"]

records.each do |record|
  GettyObject.create!(
    culture: record["Culture"],
    date: record["Date"],
    department: record["Department"],
    dimensions: record["Dimensions"],
    maker_name: record["MakerName"],
    object_number: record["ObjectNumber"],
    place: record["Place"],
    primary_title: record["PrimaryTitle"],
    record_ID: record["recordID"],
    record_link: record["recordLink"],
    source: record["Source"],
    record_type: record["Type"],
    image_thumb_URI: record["imageThumbURI"],
    medium: record["Medium"]
  )
end
