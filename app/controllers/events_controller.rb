require 'json'

class EventsController < ApplicationController

	# before_action :get_event_data, :only => [:events]

	def index
		jambase = Jambase.new
		@zip_code = params[:zip_code]
		@radius = params[:radius]
		#@city = params[:city]
		shows = jambase.get_events(zip_code: 94587, radius: 50)
		info_array = []
		new_hash = Hash.new
		shows["Events"].each do |element, value|
			 
			 options = {id: element["Id"], artists: element["Artists"], venue_name: element["Venue"]["Name"], ticket_url: element["TicketUrl"]}

			 info_array << options
		end

		ap info_array
		
		
		
		
		

	end

	# protected

	# def get_event_data
	# 	jambase = Jambase.new
	# 	@zip_code = params[:zip_code]
	# 	@radius = params[:radius]
	# 	#@city = params[:city]
	# 	shows = jambase.get_events(zip_code: @zip_code, radius: @radius)
	# 	p shows
	# 	#@parsed = JSON.parse(events.body)
	# end

end




=begin jambase.get_events(<search_options>)
   search_options available:
    zip_code:, radius:, start_date:, end_date:, artist_id:, venue_id:
    e.g. jambase.get_events(zip_code: 11111, start_date: 2016-01-01T20:00:00)
=end
