require 'dotenv'
require 'firebase'
require 'sinatra'

Dotenv.load

firebase = Firebase::Client.new(ENV['FIREBASE_URI'])

set :firebase, firebase
set :bind, '0.0.0.0'
set :port, 4567

require './app.rb'

run Sinatra::Application