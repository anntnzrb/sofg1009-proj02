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
    
end