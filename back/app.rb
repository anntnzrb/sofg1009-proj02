require_relative 'routes/helpers'
require_relative 'comentarios'

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
# GET
# ------------------------------------------------------------------------------


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


# ------------------------------------------------------------------------------
# PUT
# ------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# CIUDAD
# ------------------------------------------------------------------------------

put '/api/ciudad/:id' do
  ciudad_id = params[:id]
  data = JSON.parse(request.body.read)

  ciudad = get_data('ciudad').find { |c| c["id"] == ciudad_id }
  if ciudad
    ciudad["nombre"] = data["nombre"]
    ciudad["recomendado"] = data["recomendado"]
    ciudad["votos"] = data["votos"]

    firebase_response = firebase.update("ciudad/#{ciudad_id}", ciudad)

    if firebase_response.success?
      ciudad.to_json
    else
      status 500
      { error: "Error al actualizar la ciudad en Firebase" }.to_json
    end
  else
    status 404
    { error: "No se encontró una ciudad con el id #{ciudad_id}" }.to_json
  end
end

# ------------------------------------------------------------------------------
# AREA
# ------------------------------------------------------------------------------

put '/api/area/:id' do
  area_id = params[:id]
  data = JSON.parse(request.body.read)

  area = get_data('area').find { |a| a["id"] == area_id }
  if area
    area["ciudad"] = data["ciudad"]
    area["nombre"] = data["nombre"]
    area["recomendado"] = data["recomendado"]
    area["votos"] = data["votos"]

    firebase_response = firebase.update("area/#{area_id}", area)

    if firebase_response.success?
      area.to_json
    else
      status 500
      { error: "Error al actualizar el área en Firebase" }.to_json
    end
  else
    status 404
    { error: "No se encontró un área con el id #{area_id}" }.to_json
  end
end

# ------------------------------------------------------------------------------
# BOSQUE
# ------------------------------------------------------------------------------

put '/api/bosque/:id' do
  bosque_id = params[:id]
  data = JSON.parse(request.body.read)

  bosque = get_data('bosque').find { |b| b["id"] == bosque_id }
  if bosque
    bosque["ciudad"] = data["ciudad"]
    bosque ["nombre"] = data["nombre"]
    bosque["recomendado"] = data["recomendado"]
    bosque["votos"] = data["votos"]
    
    firebase_response = firebase.update("bosques/#{bosque_id}", bosque)

    if firebase_response.success?
      bosque.to_json
    else
      status 500
      { error: "Error al actualizar el bosque en Firebase" }.to_json
    end
  else
    status 404
    { error: "No se encontró un bosque con el id #{bosque_id}" }.to_json
  end
end
