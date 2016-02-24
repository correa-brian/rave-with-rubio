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

	/*$(function() {
		$('#autocomplete').autocomplete({
			source: states,
			focus: function(event, ui) {
			event.preventDefault();
			$(this).val(ui.item.label);
			},
			select: function(event, ui) {
			event.preventDefault();
			$(this).val(ui.item.label);
			$('#userSelection').val(ui.item.value);
			}	
  		});
	});*/

	$('#autocomplete').autocomplete ({
    lookup: states,
    onSelect: function (suggestion) {
        alert('You selected: ' + suggestion.value + suggestion.data);
    	}
		});
	
});




	

	

