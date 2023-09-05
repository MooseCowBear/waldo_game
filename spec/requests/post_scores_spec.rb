require 'rails_helper'

RSpec.describe 'Scores', type: :request do
  describe 'POST/create' do
    context 'with valid parameters' do
      let!(:test_score) { FactoryBot.create(:score) }

      before do
        post '/api/v1/scores/create', params: 
          { score: { 
            name: test_score.name, 
            time: test_score.time,
            level: test_score.level 
          } }
      end

      it 'returns the name' do
        expect(json['name']).to eq(test_score.name)
      end

      it 'returns the time' do
        expect(json['time']).to eq(test_score.time)
      end

      it 'returns the level' do
        expect(json['level']).to eq(test_score.level)
      end

      it 'returns a created status' do
        expect(response).to have_http_status(:success)
      end
    end

    context 'with invalid parameters' do
      before do
        post '/api/v1/scores/create', params: 
          { score: { 
            name: '', 
            time: '',
            level: ''
          } }
      end

      it 'returns a unprocessable entity status' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end