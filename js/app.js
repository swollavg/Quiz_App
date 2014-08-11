$(document).ready(function(){
	
	var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];
	var currentQuestion = 0;
	var currentObject = questionArray[currentQuestion];
	var correctNum = 0;
	var wrongNum = 0;
	var rightWrong = $('.correct');
	var elaborate = $('.explanation');
	
	/* sorts the questionArray variable */
	questionArray = shuffle(questionArray);

	/* Fades out intro page into the actual quiz */
	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 850, function(){
			$('.intro').hide();
		});
	});

	$('.push-button2').click(function(event){
		event.preventDefault();
		console.log(currentQuestion);
		console.log(correctNum);
	    /* Validaton. Prevents submiting without answering */
	    if($('.answer').hasClass('selectedAnswer')) {
	    	/* checks if answer is correct */
	    	if($('.selectedAnswer').text() == currentObject.correct){
	    		/* Updates the counters, adds explanations to question */
	    		correctNum += 1;
	    		rightWrong.text("Correct!");
	    		elaborate.text(currentObject.explain);
	    		addCorrectImage();
	    		$('.counter-number-correct').text(correctNum);
	    		/* Removes the highlighted answer */
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
	    		/* Removes the highlighted answer */
	    		$('.answer').removeClass('selectedAnswer');
	    		currentQuestion++;
	    		initQuestion(currentQuestion);
	    	}
	    }
	    
	    else {
	    	alert('Please chose an answer');
	    }

	});

	$('.push-button3').on('click',function(){
		newGame();		
		$('.final').animate({
			opacity: 0
		}, 1000);
		/* On the reset, make .wrapper z index bigger than .final */
		$('.wrapper').css("z-index", "1");
		$('.final').css("z-index",  "-1");
		$('.finalWin p').text('');
		$('.finalLose p').text('');
	});

	/* When an answer is clicked it turns color. Allows only 1 choice to be selected. */
	$('.answer').on('click', function(event){
		event.preventDefault();
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});
	
	/* fades to intructions page */
	$('.instructions').click(function(){
		instructions();
		$('.push-button').text('Return To Quiz!');
	});

	/* calls newGame function. Resets all variables */
	$('.restart').click(function(){
		newGame();
	});

	/* Generates all the questions and answers and updates main question counter */
	function initQuestion(question) {
		checkScore();
		 currentObject = questionArray[question];
		 text = currentObject.q;
		$('.counter-number').text(currentQuestion + 1);
		$('.question-template p').text(text);
		$('#answer1').text(currentObject.a);
		$('#answer2').text(currentObject.b);
		$('#answer3').text(currentObject.c);
		$('#answer4').text(currentObject.d);
	}
	/* Adds bottle icon for correct answer with fade */
	function addCorrectImage() {
		$('.score-wrapper').append('<img src="images/cognac.png" alt="pic of cognac" class="fade">');
		$('.fade').animate({
			opacity:1
		}, 500);
	}
	/* adds X icon for wrong answer with fade */
	function addWrongImage() {
		$('.score-wrapper').append('<img src="images/kimsmallwrong.png" alt="pic of cognac" class="fade">');
		$('.fade').animate({
			opacity:1
		}, 500);
	}
	/* Fades the game out back to the instruction screen. no DOM nodes are removed. */
	function instructions(){
		$('.intro').show();
		$('.wrapper').fadeOut;
		$('.intro').animate({
			opacity: 1
		}, 850);
		$('.intro').css("z-index", "4");
	}

	/* Resets all counters and text. */
	function newGame(){
		shuffle(questionArray);
		currentQuestion = 0;
		correctNum = 0;
		wrongNum = 0;
		$('.counter-number-correct').text(correctNum);
		$('.counter-number-wrong').text(correctNum);
		$('.score-wrapper').children().remove();
		rightWrong.text('');
		elaborate.text('');
		$('.push-button').text('Click to Begin!'); // Resets Intro button 
		$('.finalWin').show();
		$('.finalLose').show();
		initQuestion(currentQuestion);
	}

	
	/* Randomizes the questions in the array */
	function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
    }
    
    /* At the end of 10 questions, checks score and adds appopriate text etc. */
    function checkScore() {
    	
    	if(currentQuestion == 10) {
    		if(correctNum >= 6){
    			/* After the last answer, the explanation pauses for 2.2 sec, then transitions */
    			$('.final').delay(2200)
    			.queue(function(next){
    				$('.correct').text('');
	    		    $('.explanation').text('');
	    		    next();
    			})
    			.show();
    			$('.final').css("z-index", "2");
	    		$('.final').animate({
	    			opacity: 1
	    		}, 1000);

	    		$('.finalLose').hide();
				$('.finalWin p').text('Congratulations! You answered ' + correctNum + ' questions\
	    		 correctly! Kim Jong-il would be proud!');
	    		
	    	}

	    	else if(correctNum < 6) {
	    		$('.final').delay(2200)
    			.queue(function(next){
    				$('.correct').text('');
	    		    $('.explanation').text('');
	    		    next();
    			})
    			.show();
    			$('.final').css("z-index", "2");
	    		$('.final').animate({
	    			opacity: 1
	    		}, 1000);

	    		$('.finalWin').hide();
	    		$('.finalLose p').text('Sorry! You only answered ' + correctNum + ' questions correctly!\
	    			Kim Jong-il is very dissapointed with you!');
	    	}
    	}
    }


	/* Starts the question/answer generating process */
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
		c: "Ran 1000 miles",
		d: "Had ESP",
		correct: "Did not defecate",
		explain: "According to an official biography, Kim Jong-il did not defecate."
	};

	var question4 = {
		q: "Kim Jong-il frequently ate...",
		a: "Insects",
		b: "Koala",
		c: "Donkey",
		d: "Bald eagle",
		correct: "Donkey",
		explain: "One of Kim's former chefs reported in 2004 that the leader developed \
		a taste for nice French wine, lobster and donkey meat."
	};

	var question5 = {
		q: "Kim Jong-il invented...",
		a: "Chess",
		b: "Tylenol",
		c: "Cigarettes",
		d: "Hamburgers",
		correct: "Hamburgers",
		explain: "North Korean newspapers once reported that Kim Jong Il had invented \
		something called the \"double bread with meat\"."
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
		q: "How many books did Kim Jong-il write in college?",
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
		a: "Inspect rice",
		b: "Dance seductively",
		c: "Executed daily",
		d: "Get tattoos",
		correct: "Inspect rice",
		explain: "Kim had female staff inspect each grain of rice \
		to check it adhered to standards of length, weight and colour."
	};

	var question9 = {
		q: "During a North Korean famine. Kim Jong-il decided to...",
		a: "Invest in Ramen",
		b: "Bless the farmland",
		c: "Go to Disneyland",
		d: "Breed giant rabbits",
		correct: "Breed giant rabbits",
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

	/*var finalObject = {
		win: "Congratulations! You answered " + correctNum + " questions correct!",
		lose: "Sorry! you only answered " + wrongNum + " questions correct!"
	}; */
