$(document).ready(function(){


	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 1000);
		$('.wrapper').show();
	});

	/* When an answer is clicked it turns color. Allows only 1 choice to be selected. */
	$('.answer').on('click', function(){
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});


});