class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :last_level_completed, null: false
      t.integer :time, null: false
      t.string :name, default: ""

      t.timestamps
    end
  end
end
