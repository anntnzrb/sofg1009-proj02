helpers do
    def get_data(collection)
      response = settings.firebase.get(collection)
      response.body.values.map { |data| data }
    end
end