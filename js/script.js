$(document).ready(function(){
	$("#menu-btn").click(function() {
		$("#menu").toggle();
	});

	$("#about-btn").click(function() {
		$('html, body').animate({
			scrollTop:$("#about-section").offset().top
		}, 1000);
	});

	$("#events-btn").click(function() {
		$('html, body').animate({
			scrollTop:$("#events-section").offset().top
		}, 1000);
	});
});
	

	

