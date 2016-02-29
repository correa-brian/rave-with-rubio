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



	

	

