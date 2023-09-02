require_relative 'routes/helpers'

get '/' do
  <<-HTML
    <h1>API:</h1>
    <p>Endpoints:</p>
    <ul>
      <h2><li><code><a href="/api/rutas">/api/rutas</a></code></li></h2>
    </ul>
  HTML
end

# ------------------------------------------------------------------------------
# RUTA
# ------------------------------------------------------------------------------

get '/api/rutas' do
  get_data('rutas').to_json
end

# RUTA-CATEGORIA
# get '/api/rutas/categoria/:categoria' do
#   query = params[:categoria].downcase
#   get_data('rutas').select { |c| c["categoria"].downcase == query }.to_json
# end

get '/api/rutas/categoria/:categoria' do
  query = params[:categoria].downcase
  get_data_raw('rutas').select { |_, value| value['categoria'] == query }.to_json
end

# RUTA-ID
get '/api/rutas/:id' do
  get_data_raw('rutas').select { |key, _| key == params[:id] }.to_json
end

# RUTA-CIUDAD
get '/api/rutas/ciudad/:ciudad' do
  query = params[:ciudad].downcase
  get_data('rutas').select { |r| r["sitios"].any? { |s| s["ciudad"].downcase == query } }.to_json
end

# RUTA-RESENIA
get '/api/rutas/resenia/:id' do
  query = "rutas/#{params[:id]}/resenias"
  data = get_data_raw(query)

  # Transformar el array a un hash con índices como claves
  indexed_data = data.each_with_index.map { |item, index| [index, item] }.to_h

  # Eliminar valores nil
  cleaned_data = indexed_data.compact

  cleaned_data.to_json
end



# DELETE: RUTA-ID
delete '/api/rutas/:id' do
  delete_data('rutas', params[:id]).to_json
end

# DELTE: RUTA-RESENIA-ID
delete '/api/rutas/:id1/resenia/:id2' do
  delete_data("rutas/#{params[:id1]}/resenias", params[:id2]).to_json
end

# POST: NUEVA RUTA
post '/api/rutas' do
  new_route = JSON.parse(request.body.read)
  post_data('rutas', new_route).to_json
end

# POST: NUEVA RESEÑA
post '/api/rutas/:id/resenia' do
  new_review = JSON.parse(request.body.read)["resenia"]
  add_review(params[:id], new_review).to_json
end