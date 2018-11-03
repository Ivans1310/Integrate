require 'test_helper'

class PollsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @poll = polls(:one)
  end

  test "should get index" do
    get polls_url
    assert_response :success
  end

  test "should get new" do
    get new_poll_url
    assert_response :success
  end

  test "should create poll" do
    assert_difference('Poll.count') do
      post polls_url, params: { poll: { categoria_po: @poll.categoria_po, location_id: @poll.location_id, nombre_po: @poll.nombre_po, opcion1: @poll.opcion1, opcion2: @poll.opcion2, opcion3: @poll.opcion3, opcion4: @poll.opcion4, pregunta: @poll.pregunta, usuario: @poll.usuario } }
    end

    assert_redirected_to poll_url(Poll.last)
  end

  test "should show poll" do
    get poll_url(@poll)
    assert_response :success
  end

  test "should get edit" do
    get edit_poll_url(@poll)
    assert_response :success
  end

  test "should update poll" do
    patch poll_url(@poll), params: { poll: { categoria_po: @poll.categoria_po, location_id: @poll.location_id, nombre_po: @poll.nombre_po, opcion1: @poll.opcion1, opcion2: @poll.opcion2, opcion3: @poll.opcion3, opcion4: @poll.opcion4, pregunta: @poll.pregunta, usuario: @poll.usuario } }
    assert_redirected_to poll_url(@poll)
  end

  test "should destroy poll" do
    assert_difference('Poll.count', -1) do
      delete poll_url(@poll)
    end

    assert_redirected_to polls_url
  end
end
