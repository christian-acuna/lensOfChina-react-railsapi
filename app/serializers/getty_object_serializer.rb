class GettyObjectSerializer < ActiveModel::Serializer
  attributes  :record_ID, :primary_title, :culture, :department, :dimensions,
   :date, :maker_name, :object_number, :place, :record_link, :source, :record_type, :image_thumb_URI, :medium
  # attributes *GettyObject.column_names
end
