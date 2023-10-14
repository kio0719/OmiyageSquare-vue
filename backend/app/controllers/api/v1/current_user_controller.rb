class Api::V1::CurrentUserController < ApplicationController
  def show
    render json: current_api_v1_user, status: :ok
  end
end
