json.extract! poll, :id, :location_id, :nombre_po, :pregunta, :opcion1, :opcion2, :opcion3, :opcion4, :categoria_po, :usuario, :created_at, :updated_at
json.url poll_url(poll, format: :json)
