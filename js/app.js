$(document).ready(function(){
	
	var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];	
	var currentQuestion = 0;
	var currentObject = questionArray[currentQuestion];
	var correctNum = 0;
	var wrongNum = 0;
	/* Fades out intro page into the actual quiz */
	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 1200, function(){
			$('.intro').hide();
		});

	});

	$('.push-button2').click(function(){
		var rightWrong = $('.correct');
	    var elaborate = $('.explanation');
	    
	    if($('.answer').hasClass('selectedAnswer')) {
	    	
	    	if($('.selectedAnswer').text() == currentObject.correct){
	    		correctNum += 1;
	    		rightWrong.text("Correct!");
	    		elaborate.text(currentObject.explain);
	    		addCorrectImage();
	    		$('.counter-number-correct').text(correctNum);
	    		$('.answer').removeClass('selectedAnswer');
	    		currentQuestion++;
	    		initQuestion(currentQuestion);
	    	}

	    	else {
	    		wrongNum += 1;
	    		rightWrong.text("Wrong!");
	    		elaborate.text('');
	    		addWrongImage();
	    		$('.counter-number-wrong').text(wrongNum)
	    		$('.answer').removeClass('selectedAnswer');
	    		currentQuestion++;
	    		initQuestion(currentQuestion);
	    	}
	    }
	    
	    else {
	    	alert('Please chose an answer');
	    }

	});

	

	function initQuestion(question) {
		 currentObject = questionArray[question];
		 text = currentObject.q;
		 $('.counter-number').text(currentQuestion + 1);
		$('.question-template p').text(text);
		$('#answer1').text(currentObject.a);
		$('#answer2').text(currentObject.b);
		$('#answer3').text(currentObject.c);
		$('#answer4').text(currentObject.d);
	}

	function addCorrectImage() {
		$('.score-wrapper').append('<img src="images/cognac.png" alt="pic of cognac" class="fade">');
		$('.fade').animate({
			opacity:1
		}, 700);
	}

	function addWrongImage() {
		$('.score-wrapper').append('<img src="images/kimsmallwrong.png" alt="pic of cognac" class="fade">');
		$('.fade').animate({
			opacity:1
		}, 700);
	}

	/* When an answer is clicked it turns color. Allows only 1 choice to be selected. */
	$('.answer').on('click', function(){
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});


	initQuestion(currentQuestion);


}); // End document ready

/* Objects*/

	var question1 = {
		q: "Kim Jong-il made how many hole-in-one's\
		at his very first game of golf?",
		a: "1",
		b: "11",
		c: "18",
		d: "5",
		correct: "11",
		explain: "According to his biography, he first picked up a golf club\
		in 1994, and shot a 38-under par \
		round with 11 hole in ones."
	};

	var question2 = {
		q: "How much money did Kim Jong-il spend each year on\
		cognac?",
		a: "200,000",
		b: "350,000",
		c: "500,000",
		d: "700,000",
		correct: "700,000",
		explain: "Kim Jong-il was the largest consumer of Henessey, spending \
		700,00USD each year on average."
	};

	var question3 = {
		q: "According to an offical North Korean Biography, Kim Jong-il...",
		a: "Could Fly",
		b: "Did not defecate",
		c: "Ran a marathon in 2.5 hours",
		d: "Moved items using his mind",
		correct: "Did not defecate",
		explain: "According to an official biography, Kim Jong-il did not defecate."
	};

	var question4 = {
		q: "Kim Jong-il frequently ate...",
		a: "Insects",
		b: "Koala meat",
		c: "Donkey meat",
		d: "Bald eagle meat",
		correct: "Donkey meat",
		explain: "One of Kim's former chefs reported in 2004 that the leader developed \
		a taste for nice French wine, lobster and donkey meat."
	};

	var question5 = {
		q: "Kim Jong-il invented...",
		a: "Chess",
		b: "Tylenol",
		c: "The Japanese language",
		d: "Hamburgers",
		correct: "Hamburgers",
		explain: "North Korean newspapers once reported that Kim Jong Il had invented \
		something called the \"double bread with meat\" and created factories to produce \
		them."
	};

	var question6 = {
		q: "Kim Jong-il was born...",
		a: "Under a double rainbow",
		b: "To a virgin",
		c: "In south Detroit",
		d: "Under water",
		correct: "Under a double rainbow",
		explain: "His birth in Baekdu Mountain was prophesied by a swallow and heralded \
		with a double rainbow and a new star in the heavens."
	};

	var question7 = {
		q: "How many books did Kim Jong-il in college?",
		a: "100",
		b: "1500",
		c: "1600",
		d: "3000",
		correct: "1500",
		explain: "At university it was claimed in his biography \
		that he wrote no fewer than 1,500 books in three years."
	};

	var question8 = {
		q: "Kim Jong-il had female workers...",
		a: "Inspect each grain of rice",
		b: "Dance seductively at sunrise",
		c: "Executed each morning",
		d: "Dye their hair brown every October",
		correct: "Inspect each grain of rice",
		explain: "Kim had female staff inspect each grain of rice \
		to check it adhered to standards of length, weight and colour."
	};

	var question9 = {
		q: "During a North Korean famine. Kim Jong-il decided to...",
		a: "Invest 1.5 billion in Ramen noodles",
		b: "Bless the farmland with his holy touch",
		c: "Spend 2 years in switzerland",
		d: "Breed giant rabbits for consumption",
		correct: "Breed giant rabbits for consumption",
		explain: "North Korean officials got in touch with a German \
		giant rabbit farmer named Karl Szmolinsky to breed giant rabbits."
	};

	var question10 = {
		q: "Kim Jong-il was obsessed with",
		a: "Panda bears",
		b: "Lucielle Ball",
		c: "Marilyn Monroe",
		d: "Elizabeth Taylor",
		correct: "Elizabeth Taylor",
		explain: "He was said to be a particular fan of Elizabeth Taylor, \
		the late Hollywood actress."
	};
