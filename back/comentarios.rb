# # ------------------------------------------------------------------------------
# # COMENTARIOS
# # ------------------------------------------------------------------------------

# GET de todos los comentarios

get '/api/comentarios' do
  get_data('comentarios').to_json
end

# GET de todos los comentarios de una ruta

get '/api/comentarios/ruta/:id' do
  ruta_id = params[:id]
  get_data('comentarios').select { |c| c["ruta_id"] == ruta_id }.to_json
end

# POST de un comentario

post '/api/comentarios' do
    body = JSON.parse(request.body.read)
    comentario = {
        "id" => get_data('comentarios').length + 1,
        "ruta_id" => body["ruta_id"],
        "autor" => body["autor"],
        "comentario" => body["comentario"],
        "calificacion" => body["calificacion"],
    }
    add_data('comentarios', comentario)
    comentario.to_json
end

# PUT de un comentario

put '/api/comentarios/:id' do
    comentario_id = params[:id]
    body = JSON.parse(request.body.read)
    comentario = get_data('comentarios').select { |c| c["id"] == comentario_id }.first
    comentario["autor"] = body["autor"]
    comentario["comentario"] = body["comentario"]
    comentario["calificacion"] = body["calificacion"]
    update_data('comentarios', comentario)
    comentario.to_json
end

# DELETE de un comentario

delete '/api/comentarios/:id' do
    comentario_id = params[:id]
    delete_data('comentarios', comentario_id)
end

