require 'json'

class PagesController < ApplicationController
	
	def home
	end

	def index
		jambase = Jambase.new
		@zip_code = params[:zip_code]
		@radius = params[:radius]
		shows = jambase.get_events(zip_code: 94587, radius: 50)
		@info_array = [] 

		shows["Events"].each do |element, value|
			 
			options = {
			 	id: element["Id"], 
			 	artists: element["Artists"], 
			 	venue_name: element["Venue"]["Name"], 
			 	ticket_url: element["TicketUrl"]
			}

			@info_array << options
		end

		ap @info_array
		
	end

end