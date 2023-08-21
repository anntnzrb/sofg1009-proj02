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

# RUTA-RESENA
get '/api/rutas/resena/:key' do
  query = params[:key]
  search = "rutas/#{query}/resenias"
  get_data_raw(search).to_json
end