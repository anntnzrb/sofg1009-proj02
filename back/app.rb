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
get '/api/rutas/categoria/:categoria' do
  query = params[:categoria].downcase
  get_data('rutas').select { |c| c["categoria"].downcase == query }.to_json
end

# RUTA-CIUDAD
get '/api/rutas/ciudad/:ciudad' do
  query = params[:ciudad].downcase
  get_data('rutas').select { |r| r["sitios"].any? { |s| s["ciudad"].downcase == query } }.to_json
end

# RUTA-RESENIA
get '/api/rutas/resenia/:id' do
  query = "rutas/#{params[:id]}/resenias"
  get_data_raw(query).to_json
end

# DELETE: RUTA-ID
delete '/api/rutas/:id' do
  delete_data('rutas', params[:id]).to_json
end

# DELTE: RUTA-RESENIA-ID
delete '/api/rutas/:id1/resenia/:id2' do
  delete_data("rutas/#{params[:id1]}/resenias", params[:id2]).to_json
end