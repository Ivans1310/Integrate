# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_06_015820) do

  create_table "locations", force: :cascade do |t|
    t.integer "num_loc"
    t.string "nombre_loc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "problematics", force: :cascade do |t|
    t.string "nombre_pr"
    t.text "descripcion_pr"
    t.boolean "te_perjudica"
    t.text "descripcion_prueba"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_problematics_on_user_id"
  end

  create_table "thematics", force: :cascade do |t|
    t.integer "location_id"
    t.string "nombre_te"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_thematics_on_location_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "location_id"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "nombre_us"
    t.string "apellido_us"
    t.string "cedula_us"
    t.string "edad_us"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["location_id"], name: "index_users_on_location_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
