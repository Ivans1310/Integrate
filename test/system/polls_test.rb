require "application_system_test_case"

class PollsTest < ApplicationSystemTestCase
  setup do
    @poll = polls(:one)
  end

  test "visiting the index" do
    visit polls_url
    assert_selector "h1", text: "Polls"
  end

  test "creating a Poll" do
    visit polls_url
    click_on "New Poll"

    fill_in "Categoria Po", with: @poll.categoria_po
    fill_in "Location", with: @poll.location_id
    fill_in "Nombre Po", with: @poll.nombre_po
    fill_in "Opcion1", with: @poll.opcion1
    fill_in "Opcion2", with: @poll.opcion2
    fill_in "Opcion3", with: @poll.opcion3
    fill_in "Opcion4", with: @poll.opcion4
    fill_in "Pregunta", with: @poll.pregunta
    fill_in "Usuario", with: @poll.usuario
    click_on "Create Poll"

    assert_text "Poll was successfully created"
    click_on "Back"
  end

  test "updating a Poll" do
    visit polls_url
    click_on "Edit", match: :first

    fill_in "Categoria Po", with: @poll.categoria_po
    fill_in "Location", with: @poll.location_id
    fill_in "Nombre Po", with: @poll.nombre_po
    fill_in "Opcion1", with: @poll.opcion1
    fill_in "Opcion2", with: @poll.opcion2
    fill_in "Opcion3", with: @poll.opcion3
    fill_in "Opcion4", with: @poll.opcion4
    fill_in "Pregunta", with: @poll.pregunta
    fill_in "Usuario", with: @poll.usuario
    click_on "Update Poll"

    assert_text "Poll was successfully updated"
    click_on "Back"
  end

  test "destroying a Poll" do
    visit polls_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Poll was successfully destroyed"
  end
end
