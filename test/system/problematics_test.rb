require "application_system_test_case"

class ProblematicsTest < ApplicationSystemTestCase
  setup do
    @problematic = problematics(:one)
  end

  test "visiting the index" do
    visit problematics_url
    assert_selector "h1", text: "Problematics"
  end

  test "creating a Problematic" do
    visit problematics_url
    click_on "New Problematic"

    fill_in "Descripcion Pr", with: @problematic.descripcion_pr
    fill_in "Nombre Pr", with: @problematic.nombre_pr
    fill_in "Te Perjudica", with: @problematic.te_perjudica
    click_on "Create Problematic"

    assert_text "Problematic was successfully created"
    click_on "Back"
  end

  test "updating a Problematic" do
    visit problematics_url
    click_on "Edit", match: :first

    fill_in "Descripcion Pr", with: @problematic.descripcion_pr
    fill_in "Nombre Pr", with: @problematic.nombre_pr
    fill_in "Te Perjudica", with: @problematic.te_perjudica
    click_on "Update Problematic"

    assert_text "Problematic was successfully updated"
    click_on "Back"
  end

  test "destroying a Problematic" do
    visit problematics_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Problematic was successfully destroyed"
  end
end
