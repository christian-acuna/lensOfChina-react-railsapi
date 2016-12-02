class GettyObjectsController < ApplicationController
  def index
    render(
      status: 200,
      json: GettyObject.all
    )
  end

  def search
    q = params[:q].capitalize

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: GettyObject.where(["place LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
