require 'test_helper'

class ProblematicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @problematic = problematics(:one)
  end

  test "should get index" do
    get problematics_url
    assert_response :success
  end

  test "should get new" do
    get new_problematic_url
    assert_response :success
  end

  test "should create problematic" do
    assert_difference('Problematic.count') do
      post problematics_url, params: { problematic: { descripcion_pr: @problematic.descripcion_pr, nombre_pr: @problematic.nombre_pr, te_perjudica: @problematic.te_perjudica } }
    end

    assert_redirected_to problematic_url(Problematic.last)
  end

  test "should show problematic" do
    get problematic_url(@problematic)
    assert_response :success
  end

  test "should get edit" do
    get edit_problematic_url(@problematic)
    assert_response :success
  end

  test "should update problematic" do
    patch problematic_url(@problematic), params: { problematic: { descripcion_pr: @problematic.descripcion_pr, nombre_pr: @problematic.nombre_pr, te_perjudica: @problematic.te_perjudica } }
    assert_redirected_to problematic_url(@problematic)
  end

  test "should destroy problematic" do
    assert_difference('Problematic.count', -1) do
      delete problematic_url(@problematic)
    end

    assert_redirected_to problematics_url
  end
end
