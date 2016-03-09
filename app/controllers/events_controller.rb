class EventsController < ApplicationController

	before_action :get_event_data, :only => [:events]

	def events
	end

	protected

	def get_event_data
		jambase = Jambase.new
		@zip_code = params[:zip_code]
		@radius = params[:radius]
		#@city = params[:city]
		events = jambase.get_events(zip_code: @zip_code, radius: @radius)
		#@parsed = JSON.parse(events.body)
	end

end




=begin jambase.get_events(<search_options>)
   search_options available:
    zip_code:, radius:, start_date:, end_date:, artist_id:, venue_id:
    e.g. jambase.get_events(zip_code: 11111, start_date: 2016-01-01T20:00:00)
=end
