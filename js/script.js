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
	states = [
	'Alabama',
	'Arkansas',
	'Colorado',
	'Georgia', 
	'Massachusetts',
	'Minnesota',
	'Oklahoma',
	'Tennessee',
	'Texas',
	'Vermont',
	'Virginia',
	];

	$('#autocomplete').autocomplete({
		source: states		
	});	
  });
});

	

	

