$(document).ready(function(){

	var correct = "Correct!";
	var wrong = "Wrong!";
	var answer1 = $('#answer1');
	var answer2 = $('#answer2');
	var answer3 = $('#answer3');
	var answer4 = $('#answer4');
	var answerArray = [answer1, answer2, answer3, answer4];	
	
	/* Fades out intro page into the actual quiz */
	$('.push-button').click(function(event){
		event.preventDefault();
		$('.intro').animate({
			opacity:0
		}, 1500, function(){
			$('.intro').hide();
		});

	});


	$('.question-template p').text(question1.q1);
	 
	
    	$.each(answerArray, function(index, value){

    		this.text(question1.a1);
    	});

    	/*
    	for(i = 0; i < answerArray.length; i++) {

	    	for(prop in question1){
	    		
	    	    answerArray[i].text(question1[prop]);
	        };
        }
 		*/

    


	/* When an answer is clicked it turns color. Allows only 1 choice to be selected. */
	$('.answer').on('click', function(){
		console.dir(this);
		$('.answer').removeClass('selectedAnswer');
		$(this).addClass('selectedAnswer');
	});





}); // End document ready

/* Objects*/

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

	var question1 = {
		q1: "Kim Jong-il made how many hole-in-one's\
		at his very first game of golf?",
		a1: "1",
		correct: "11",
		a3: "18",
		a4: "5",
		explain1: "According to his biography, he first picked up a golf club\
		in 1994, and shot a 38-under par \
		round with 11 hole in ones."
	};

	var question2 = {
		q2: "How much money did Kim Jong-il spend each year on\
		cognac?",
		a1: "$200,000",
		a2: "$350,000",
		a3: "$500,000",
		correct: "$700,000",
		explain2: "Kim Jong-il was the largest consumer of Henessey, spending \
		700,00USD each year on average."
	};

	var question3 = {
		q3: "According to an offical North Korean Biography, Kim Jong-il...",
		a1: "Could Fly",
		correct: "Did not defecate",
		a3: "Ran a marathon in 2.5 hours",
		a4: "Moved items using his mind",
		explain3: "According to an official biography, Kim Jong-il did not defecate."
	};

	var question4 = {
		q4: "Kim Jong-il frequently ate...",
		a1: "Insects",
		a2: "Koala meat",
		correct: "Donkey meat",
		a4: "Bald eagle meat",
		explain4: "One of Kim's former chefs reported in 2004 that the leader developed \
		a taste for nice French wine, lobster and donkey meat."
	};

	var question5 = {
		q5: "Kim Jong-il invented...",
		a1: "Chess",
		a2: "Tylenol",
		a3: "The Japanese language",
		correct: "Hamburgers",
		explain5: "North Korean newspapers once reported that Kim Jong Il had invented \
		something called the \"double bread with meat\" and created factories to produce \
		them."
	};

	var question6 = {
		q6: "Kim Jong-il was born...",
		correct: "under a double rainbow",
		a2: " to a virgin",
		a3: "in south Detroit",
		a4: "under water",
		explain6: "his birth in Baekdu Mountain was prophesied by a swallow and heralded \
		with a double rainbow and a new star in the heavens."
	};

	var question7 = {
		q7: "How many books did Kim Jong-il in college?",
		a1: "100",
		correct: " 1500",
		a3: "1600",
		a4: "3000",
		explain7: "At university it was claimed in his biography \
		that he wrote no fewer than 1,500 books in three years."
	};

	var question8 = {
		q8: "Kim Jong-il had female workers...",
		correct: "inspect each grain of rice before cooking it",
		a2: "dance seductively at sunrise",
		a3: "executed each morning",
		a4: "dye their hair brown every October",
		explain8: "Kim had female staff inspect each grain of rice \
		to check it adhered to standards of length, weight and colour."
	};

	var question9 = {
		q9: "During a North Korean famine. Kim Jong-il decided to...",
		a1: "invest 1.5 billion in Ramen noodles",
		a2: "bless the farmland with his holy touch",
		a3: "spend 2 years in switzerland",
		correct: "breed giant rabbits for consumption",
		explain9: "North Korean officials got in touch with a German \
		giant rabbit farmer named Karl Szmolinsky to breed giant rabbits."
	};

	var question10 = {
		q10: "Kim Jong-il was obsessed with",
		a1: "Panda bears",
		a2: "Lucielle Ball",
		a3: "Marilyn Monroe",
		correct: "Elizabeth Taylor",
		explain10: "He was said to be a particular fan of Elizabeth Taylor, \
		the late Hollywood actress."
	};
