class Score < ApplicationRecord
  validates :last_level_completed, presence: true
  validates :time, presence: true

  before_validation :strip_input_fields

  private

  def strip_input_fields
    self.attributes.each do |key, value|
      self[key] = value.strip if value.respond_to?("strip")
    end
  end
end
