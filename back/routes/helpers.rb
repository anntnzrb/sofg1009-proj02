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
end