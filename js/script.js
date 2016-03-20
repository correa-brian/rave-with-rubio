$(document).ready(function(){
	$("#menu-btn").click(function() {
		$("#menu").toggle();
	});

	$("#btn-about").click(function() {
		$('html, body').animate({
			scrollTop:$("#section-about").offset().top
		}, 800);
	});

	$("#btn-events").click(function() {
		$('html, body').animate({
			scrollTop:$("#section-events").offset().top
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

});



	

	

