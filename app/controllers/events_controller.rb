require 'json'

class EventsController < ApplicationController

	def index
		jambase = Jambase.new
		@zip_code = params[:zip_code]
		@radius = params[:radius]
		@start_date = params[:start_date]
		shows = jambase.get_events(zip_code: @zip_code, radius: @radius)
		@info_array = [] 

		shows["Events"].each do |element, value|
			 
			options = {
			 	id: element["Id"], 
			 	start_date: element["Date"], 
			 	artists: element["Artists"],
			 	venue_name: element["Venue"]["Name"], 
			 	ticket_url: element["TicketUrl"]
			}

			@info_array << options
		end

		ap @info_array
	end

end



=begin 

For testing


class EventsController < ApplicationController

	def index
		@info_array = Show.all
	end

	def new
		@new_show = Show.new
	end

	def create
		@new_show = Show.new(event_params)
		if @new_show.save
			redirect_to(:action => 'index')
		else
			render('index')
		end 
	end

	private
	def event_params
		params.require(:show).permit(:artist, :venue_name)
		jambase = Jambase.new
		@zip_code = params[:zip_code]
		@radius = params[:radius]
		shows = jambase.get_events(zip_code: 10012, radius: 50)
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
	end

end

=end

