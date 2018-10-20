# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.create(num_loc: 1, nombre_loc: 'Usaquen')
Location.create(num_loc: 2, nombre_loc: 'Chapinero')
Thematic.create(location_id: 1, nombre_te: 'Movilidad')
Thematic.create(location_id: 1, nombre_te: 'Seguridad')
Thematic.create(location_id: 1, nombre_te: 'Basuras')
Thematic.create(location_id: 1, nombre_te: 'Cultura y re')
Thematic.create(location_id: 2, nombre_te: 'Movilidad')
Thematic.create(location_id: 2, nombre_te: 'Seguridad')
Problematic.create(nombre_pr: 'Nombre problematica Movilidad L1, ', descripcion_pr: 'Descripcion problematica Movilidad L1', te_perjudica: true,  thematic_id: 1, usuario: "Ivan")
Problematic.create(nombre_pr: 'Nombre 2 problematica Movilidad L1, ', descripcion_pr: 'Descripcion 2 problematica Movilidad L1', te_perjudica: true, thematic_id: 1, usuario: "Ivan")
Problematic.create(nombre_pr: 'Nombre problematica Seguridad L1, ', descripcion_pr: 'Descripcion problematica Seguridad L1', te_perjudica: true, thematic_id: 2, usuario: "Ivan")
Problematic.create(nombre_pr: 'Nombre 2 problematica Seguridad L1, ', descripcion_pr: 'Descripcion 2 problematica Seguridad L1', te_perjudica: true, thematic_id: 2, usuario: "Ivan")
Problematic.create(nombre_pr: 'Nombre problematica Movilidad L2, ', descripcion_pr: 'Descripcion 2 problematica Movilidad L2', te_perjudica: true, thematic_id: 5, usuario: "Ivan2")
Problematic.create(nombre_pr: 'Nombre problematica Seguridad L2, ', descripcion_pr: 'Descripcion 2 problematica Seguridad L2', te_perjudica: true,  thematic_id: 6, usuario: "Ivan2")
