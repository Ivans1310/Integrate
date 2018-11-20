# README

Intégrate , plataforma de integracion social

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
