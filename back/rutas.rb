# # ------------------------------------------------------------------------------
# # RUTAS
# # ------------------------------------------------------------------------------

# GET de todas las rutas

get '/api/rutas' do
    get_data('rutas').to_json
end

# GET de todas las rutas de una categoria
# Turistico 

get '/api/rutas/turistico' do
    get_data('rutas').select { |r| r["categoria"] == "turistico" }.to_json
end

# Bosques

get '/api/rutas/bosque' do
    get_data('rutas').select { |r| r["categoria"] == "bosque" }.to_json
end

# Areas Prtegidas

get '/api/rutas/area' do
    get_data('rutas').select { |r| r["categoria"] == "area" }.to_json
end

# POST de una ruta

# post '/api/rutas' do
#     body = JSON.parse(request.body.read)
#     ruta = {
#         "id" => get_data('rutas').length + 1,
#         "nombre" => body["nombre"],
#         "categoria" => body["categoria"],
        
#     }
#     add_data('rutas', ruta)
#     ruta.to_json
# end


