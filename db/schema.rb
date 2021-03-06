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

ActiveRecord::Schema.define(version: 2018_11_01_200519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "locations", force: :cascade do |t|
    t.integer "num_loc"
    t.string "nombre_loc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "polls", force: :cascade do |t|
    t.bigint "location_id"
    t.string "nombre_po"
    t.string "pregunta"
    t.string "opcion1"
    t.string "opcion2"
    t.string "opcion3"
    t.string "opcion4"
    t.string "categoria_po"
    t.string "usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_polls_on_location_id"
  end

  create_table "problematics", force: :cascade do |t|
    t.bigint "location_id"
    t.string "nombre_pr"
    t.text "descripcion_pr"
    t.integer "te_perjudica"
    t.text "categoria_pr"
    t.text "usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_problematics_on_location_id"
  end

  create_table "reports", force: :cascade do |t|
    t.bigint "location_id"
    t.string "nombre_re"
    t.string "descripcion_re"
    t.integer "like_re"
    t.string "categoria_re"
    t.string "usuario"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_reports_on_location_id"
  end

  create_table "solutions", force: :cascade do |t|
    t.string "autor_sol"
    t.text "contenido_sol"
    t.integer "me_gusta_sol"
    t.bigint "problematic_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["problematic_id"], name: "index_solutions_on_problematic_id"
  end

  create_table "users", force: :cascade do |t|
    t.bigint "location_id"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "nombre_us"
    t.string "apellido_us"
    t.string "cedula_us"
    t.string "roll"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["location_id"], name: "index_users_on_location_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "votes", id: :serial, force: :cascade do |t|
    t.string "votable_type"
    t.integer "votable_id"
    t.string "voter_type"
    t.integer "voter_id"
    t.boolean "vote_flag"
    t.string "vote_scope"
    t.integer "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope"
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope"
  end

  add_foreign_key "polls", "locations"
  add_foreign_key "problematics", "locations"
  add_foreign_key "reports", "locations"
  add_foreign_key "solutions", "problematics"
  add_foreign_key "users", "locations"
end
