$(function() {
	$('.iryou').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('iryou');
		}
		else{
			$(this).stop().removeClass('iryou');
		}
	});
});