require 'rubygems'
require 'sinatra'


set :root, File.dirname(__FILE__)
set :public_folder, File.dirname(__FILE__)
set :static, true

def development?
  !(ENV['RACK_ENV'] == 'production')
end
get '/', :provides => 'html'  do
  haml :index
end

def javascript_files
  files = []
  Dir.glob("js/*.js") do |filename|
    unless filename.include? 'deploy'
      files << "\"#{File.basename(filename)}\""
    end
  end
  files.join(',')
end


if development?
  set :logging, true

  # Only enable the saving mechanism in test/development
  put '/*' do
    unless request.body.nil?
      path = File.join(File.dirname(__FILE__), request.path)
      puts ">> Commiting changes to #{path}"
      File.open(path, 'w') do |fd|
        request.body.each do |line|
          fd.write(line)
        end
      end
    end
  end
end

