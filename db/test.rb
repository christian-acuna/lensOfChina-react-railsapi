require 'json'
file = File.read('./db/shanghai.json')
data_hash = JSON.parse(file)
records = data_hash["Response"]["doc"]["record"]
