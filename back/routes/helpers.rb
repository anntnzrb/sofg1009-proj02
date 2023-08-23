helpers do
    # => [{}, {}, {}]
    def get_data(collection)
      response = settings.firebase.get(collection)
      response.body.values
    end

    # => { "name": "xyz" }
    def get_data_raw(collection)
      response = settings.firebase.get(collection)
      response.body
    end
    
    def delete_data(collection, id)
      response = settings.firebase.delete("#{collection}/#{id}")
      response.body
    end

    def post_data(collection, data)
      response = settings.firebase.push(collection, data)
      response.body
    end

    def add_review(id, review)
      route = get_data_raw("rutas/#{id}")
      route["resenias"].push(review)
      response = settings.firebase.update("rutas/#{id}", route)
      response.body
    end
end