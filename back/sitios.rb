# # ------------------------------------------------------------------------------
# # SITIOS
# # ------------------------------------------------------------------------------

# GET de todos los sitios

get '/api/sitios' do
    get_data('sitios').to_json
end

# GET de todos los sitios de una categoria
# Turistico

get '/api/sitios/turistico' do
    get_data('sitios').select { |s| s["categoria"] == "turistico" }.to_json
end

# Bosques

get '/api/sitios/bosque' do
    get_data('sitios').select { |s| s["categoria"] == "bosque" }.to_json
end

# Areas Prtegidas

get '/api/sitios/area' do
    get_data('sitios').select { |s| s["categoria"] == "area" }.to_json
end

# POST de un sitio

post '/api/sitios' do
    body = JSON.parse(request.body.read)
    sitio = {
        "id" => get_data('sitios').length + 1,
        "nombre" => body["nombre"],
        "categoria" => body["categoria"],
        "ciudad" => body["ciudad"],
    }
    add_data('sitios', sitio)
    sitio.to_json
end

# PUT de un sitio

put '/api/sitios/:id' do
    sitio_id = params[:id]
    body = JSON.parse(request.body.read)
    sitio = get_data('sitios').select { |s| s["id"] == sitio_id }.first
    sitio["nombre"] = body["nombre"]
    sitio["categoria"] = body["categoria"]
    sitio["ciudad"] = body["ciudad"]
    update_data('sitios', sitio)
    sitio.to_json
end

# DELETE de un sitio

delete '/api/sitios/:id' do
    sitio_id = params[:id]
    delete_data('sitios', sitio_id)
end

