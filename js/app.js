$(document).ready(function(){

	/* Fades out intro page into the actual quiz */
	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 1500, function(){
			$('.intro').hide();
		});

	});

	/* When an answer is clicked it turns color. Allows only 1 choice to be selected. */
	$('.answer').on('click', function(){
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});


});