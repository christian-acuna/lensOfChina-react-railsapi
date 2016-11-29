class ChangeTypeToObjectType < ActiveRecord::Migration[5.0]
  def change
    rename_column :getty_objects, :type, :record_type
  end
end
