require 'bandsintown'
require 'json'

class EventsController < ApplicationController

	before_action :get_event_data, :only => [:events]

	def events
	end

	protected

	def get_event_data

		Bandsintown.app_id = "Rave_w_Rubio"

		@city = params[:city]
		events = Bandsintown::Base.get("http://api.bandsintown.com/events/search.json?location=#{@city}&app_id=Rave_w_Rubio")
		@parsed = JSON.parse(events.body)
	end

end
