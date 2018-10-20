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

// para renderizar la vista a  al metodo new
render :new

<!--


-->
Preguntas
// de donde sale el passwod en la vista registro?
//@problematic = current_user.problematic.new(problematic_params)
// funcionamiento de esto :
// porque en unas vistas es form.text_field :location_id y en otras es f.text_field :location_id
//https://hidden-eyrie-17738.herokuapp.com/ | https://git.heroku.com/hidden-eyrie-17738.git

Mas pregutnas
// porque fue necesario hacer una migracion aparte, y no fue posible al modificar el archivo de migracion del modelo problematic

// porq las variables de clase que son privadas si se pueden ver en la clase, su funcionamiento

// como recupero una tabla que borre en el postgre
// que diferencia hay entre params[:id] y params[:articulo_id]




<p id="notice"><%= notice %></p>

<h1>Thematics</h1>

<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Nombre te</th>
      <th colspan="3"></th>
    </tr>
  </thead>

  <tbody>
//    <% @thematics.each do |thematic| %>
      <tr>
        <td><%= thematic.location_id %></td>
        <td><%= thematic.nombre_te %></td>
        <td><%= link_to 'Show', thematic %></td>
        <td><%= link_to 'Edit', edit_thematic_path(thematic) %></td>
        <td><%= link_to 'Destroy', thematic, method: :delete, data: { confirm: 'Are you sure?' } %></td>
      </tr>
    <% end %>
  </tbody>
</table>

<br>

<%= link_to 'New Thematic', new_thematic_path %>
