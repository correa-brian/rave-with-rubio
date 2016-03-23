// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	$("#menu-btn").click(function() {
		$("#menu").toggle();
	});

	$("#about-btn").click(function() {
		$('html, body').animate({
			scrollTop:$("#about-section").offset().top
		}, 800);
	});

	$("#events-btn").click(function() {
		$('html, body').animate({
			scrollTop:$("#events-section").offset().top
		}, 800);
	});

	$('#autocomplete').autocomplete ({
    lookup: states,
    onSelect: function (suggestion) {
        stateId = suggestion.value;
        stateEvent = suggestion.data;
        outputstring = 'Events in ' + suggestion.value + ". There are raves here: " + suggestion.data;
        $('#output').append(outputstring)
    	}
	});

	$(function() {
		$("#datepicker").datepicker();
		var date = $(this).datepicker('getDate');
	});

});