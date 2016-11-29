require 'test_helper'

class GettyObjectsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get getty_objects_index_url
    assert_response :success
  end

end
