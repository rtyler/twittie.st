require 'rubygems'
require 'sinatra'


set :root, File.dirname(__FILE__)
set :public_folder, File.dirname(__FILE__)
set :static, true
unless ENV['RACK_ENV'] == 'production'
  set :logging, true

  # Only enable the saving mechanism in test/development
  put '/*' do
    puts request.path
    unless request.body.nil?
      path = File.join(File.dirname(__FILE__), request.path)
      puts "Commiting changes to #{path}"
      File.open(path, 'w') do |fd|
        request.body.each do |line|
          fd.write(line)
        end
      end
    end
  end
end

get '/' do
  redirect to('/index.html')
end
