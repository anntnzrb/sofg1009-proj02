require_relative 'routes/helpers'

get '/' do
  <<-HTML
    <h1>API:</h1>
    <p>Endpoints:</p>
    <ul>
      <h2><li><code><a href="/api/ciudad">/api/ciudad</a></code></li></h2>
      <li><code><a href="/api/ciudad/Guayaquil">/api/ciudad/:ciudad</a>(Guayaquil)</code></li>

      <br>

      <h2><li><code><a href="/api/area">/api/area</a></code></li></h2>
      <li><code><a href="/api/area/Galapagos">/api/area/:ciudad</a>(Galapagos)</code></li>

      <br>

      <h3><li><code><a href="/api/bosque">/api/bosque</a></code></li></h3>
      <li><code><a href="/api/bosque/Guayaquil">/api/bosque/:ciudad</a>(Guayaquil)</code></li>
    </ul>
  HTML
end

# ------------------------------------------------------------------------------
# CIUDAD
# ------------------------------------------------------------------------------

get '/api/ciudad' do
  get_data('ciudad').to_json
end

get '/api/ciudad/:ciudad' do
  ciudad = params[:ciudad].downcase
  get_data('ciudad').select { |c| c["ciudad"].downcase == ciudad }.to_json
end

# ------------------------------------------------------------------------------
# AREA
# ------------------------------------------------------------------------------

get '/api/area' do
  get_data('area').to_json
end

get '/api/area/:ciudad' do
  ciudad = params[:ciudad].downcase
  get_data('area').select { |c| c["ciudad"].downcase == ciudad }.to_json
end

# ------------------------------------------------------------------------------
# BOSQUE
# ------------------------------------------------------------------------------

get '/api/bosque' do
  get_data('bosque').to_json
end

get '/api/bosque/:ciudad' do
  ciudad = params[:ciudad].downcase
  get_data('bosque').select { |c| c["ciudad"].downcase == ciudad }.to_json
end