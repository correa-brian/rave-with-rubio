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
        var stateId = suggestion.value;
        var stateEvent = suggestion.data;
        $('#output').html(stateId);
    	}
	});

});



	

	

