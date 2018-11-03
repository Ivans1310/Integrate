json.extract! report, :id, :location_id, :nombre_re, :descripcion_re, :like_re, :categoria_re, :usuario, :created_at, :updated_at
json.url report_url(report, format: :json)
