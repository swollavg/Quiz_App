$(document).ready(function(){
	var clicked = false;
	$('.answer1, .answer2, .answer3, .answer4').on('mouseup', function(){


		if(clicked == false){
			$(this).css('background-color', 'yellow');
			clicked = true;
		}

		else {
			$(this).css('background-color', 'white');
			clicked = false;
		}
	})
});