class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :scores, :last_level_completed, :level
  end
end
