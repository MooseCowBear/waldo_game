class Api::V1::ScoresController < ApplicationController
  def index
    scores = Score.all.order(level: :desc, time: :asc, created_at: :asc)
    render json: scores
  end

  def create
    score = Score.create!(score_params)
    if score
      render json: score
    else
      render json: score.errors
    end
  end

  private

  def score_params
    # saves both with the require and without
    # but stops complaining about unpermitted params with require...
    params.require(:score).permit(:name, :time, :level)
  end
end
