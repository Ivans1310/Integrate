# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
// comando
// para crear un el crud de un modelo con referencia a otro.
rails g scaffold Problematic user:references nombre_pr:string descripcion_pr:text te_perjudica:boolean
// para borrar un todo un scaffold hecho por rails , en este caso se usa de ejemplo Problematic
 rails destroy scaffold Problematic
 // para borrar un todo un devise hecho por rails , en este caso se usa de ejemplo Problematic
  rails destroy devise User

// para revertir la ultimi migracion hecha, se ejecuta asumiendo que migraciones se guardan como si fuera una pila FIFO
rake db:rollback
/// para crear un devise
rails g devise User

// para referenciar un modelo a otro en este caso referenciar problematics a users
rails g migration add_user_id_to_problematics user:references
rails g migration add_location_id_to_users location:references

// Para agregar una nueva columna en un modelo

<!--
<div class="field">
  <%= #f.label :location %><br />
  <%= #f.location_field :location, autofocus: true, autocomplete: "location", class:"form-control" %>
</div>

-->
Preguntas
// de donde sale el passwod en la vista registro?
