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

	$(function() {
	$('#autocomplete').autocomplete({
		source: states,
		focus: function(event, ui) {
			event.preventDefault();
			$(this).val(ui.item.label);
		},
		select: function(event, ui) {
			event.preventDefault();
			var userState = $(this).val(ui.item.label);
			$('#outputcontent').val(ui.item.value);
			$('#outputbox').append('<p id="outputcontent-2">' + userState + '</p>');
		}	
  	});
});

/*	


	.live("blur", function(event) {
var get_val = $('ul.ui-autocomplete li:first a').text();

$('#outputbox').append('<p id="liststate">' +  + '</p>');*/
});

	

	

