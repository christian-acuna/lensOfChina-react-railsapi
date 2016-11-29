class GettyObjectsController < ApplicationController
  def index
    render(
      status: 200,
      json: GettyObject.all
    )
  end
end
