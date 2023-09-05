require 'rails_helper'

RSpec.describe 'Scores', type: :request do
  describe 'GET/index' do
    before do
      FactoryBot.create_list(:score, 10)
      get '/api/v1/scores/index'
    end

    it 'returns all scores' do
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(:success)
    end
  end
end