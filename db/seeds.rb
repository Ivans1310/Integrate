# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Location.create(num_loc: 1, nombre_loc: 'Usaquen')
Location.create(num_loc: 2, nombre_loc: 'Chapinero')
Problematic.create(location_id: 1, nombre_pr: 'Mucha basura', descripcion_pr: 'Hay demasiada basura en la calle', usuario:'Ivan', categoria_pr:"Contaminacion")
Problematic.create(location_id: 1, nombre_pr: 'Mucha Huevos', descripcion_pr: 'Hay demasiados carros en la calle', usuario:'Ivan', categoria_pr:"Movilidad")
Problematic.create(location_id: 1, nombre_pr: 'No hay parques', descripcion_pr: 'En el barrio castilla no hay ni un solo parque', usuario:'Ivan', categoria_pr:"Cultura y Recrecion")
Problematic.create(location_id: 1, nombre_pr: 'Baja iluminacion', descripcion_pr: 'EN la calle principal casi no hay ilumincacion', usuario:'Ivan', categoria_pr:"Seguridad")
