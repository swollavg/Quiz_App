$(document).ready(function(){
	
	var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
	var correct = "Correct!";
	var wrong = "Wrong!";
	var answer1 = $('#answer1');
	var answer2 = $('#answer2');
	var answer3 = $('#answer3');
	var answer4 = $('#answer4');
	var answerArray = [answer1, answer2, answer3, answer4];	
	var currentQuestion = 0;
	var rightWrong = $('.correct');
	var elaborate = $('.explanation');
	var currentObject = questionArray[currentQuestion];


	/* Fades out intro page into the actual quiz */
	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 1500, function(){
			$('.intro').hide();
		});

	});

	$('.push-button2').click(function(){
	    	if($('.selectedAnswer').text() == currentObject.correct){
	    		rightWrong.text(correct);
	    		elaborate.text(currentObject.explain);
	    		currentQuestion++;
	    		initQuestion(currentQuestion);
	    	}

	    	else {
	    		
	    		rightWrong.text(wrong);
	    		currentQuestion++;
	    		initQuestion(currentQuestion);
	    	}

	});

	

	function initQuestion(question) {
		 currentObject = questionArray[question];
		 text = currentObject.q;
		$('.question-template p').text(text);
		$('#answer1').text(currentObject.a);
		$('#answer2').text(currentObject.b);
		$('#answer3').text(currentObject.c);
		$('#answer4').text(currentObject.d);

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
		a: "under a double rainbow",
		b: " to a virgin",
		c: "in south Detroit",
		d: "under water",
		correct: "under a double rainbow",
		explain: "his birth in Baekdu Mountain was prophesied by a swallow and heralded \
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
		a: "inspect each grain of rice before cooking it",
		b: "dance seductively at sunrise",
		c: "executed each morning",
		d: "dye their hair brown every October",
		correct: "inspect each grain of rice before cooking it",
		explain: "Kim had female staff inspect each grain of rice \
		to check it adhered to standards of length, weight and colour."
	};

	var question9 = {
		q: "During a North Korean famine. Kim Jong-il decided to...",
		a: "invest 1.5 billion in Ramen noodles",
		b: "bless the farmland with his holy touch",
		c: "spend 2 years in switzerland",
		d: "breed giant rabbits for consumption",
		correct: "breed giant rabbits for consumption",
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
