'use strict';

// This variable keeps track of the current question number;
let questionNumber = 0;
let currentScore = 0;
const highlightColor = '#90d9f0';

function startQuiz() {
	renderStartPage();
	autoFocusButton();

	$('.js-start-quiz').click(function() {
		$(this).closest('main').fadeOut("fast", function(){ // fade out start page
			removeMain();
			renderHeader();
			renderQuestionPartial(getQuestion(questionNumber));
			incrQuestionNumber();
		});
	});
}

function renderStartPage() {
	$('body').show(); // this is necessary after the first Quiz restart, not on initial loading

 const startPage = `
		<main role="main" class="row">
			<div class="col-10 col-10-offset">
				<img src="img/astronaut_large.png" alt="An image of an astronaut playing a guitar in earth orbit." class="logo-main">
				<h1>How well can you pair soundtrack music and composers with movies, tv-shows or games?</h1>
				<button type="button" class="js-start-quiz">Start</button>
			</div>
		</main>`;

	$('body').append(startPage);
	animateMainLogo();	
}

function animateMainLogo() {
	$('.logo-main').addClass('animated pulse');
}

function autoFocusButton() {
	$('button').focus();
}

function removeMain() {
	$('main').remove();
}

function renderHeader() {
	$('header').show();
}

function incrQuestionNumber() {
	questionNumber++;
}

function getQuestion(questionIndex) {
	return questionsDataStore[questionIndex];
}

function renderQuestionPartial(currentQuestion) {
	// This function is reponsible for rendering a new question in the DOM
	removeMain();

	const questionForm = `
	<main role="main" class="row animated fadeIn">
		<div class="col-10 col-10-offset">
			<form class="question-form js-question-form" action="/server-endpoint" method="post">
			<button type="submit">Submit</button>				
			</form>
		</div>
	</main>`;

	const fieldsetContainer = $('<fieldset>');
	for (let i = 0; i<currentQuestion.answers.length; i++) {
		fieldsetContainer.append(`
			<label class="answer-label">
				<input type="radio" name="answer" value="${currentQuestion.answers[i]}" class="answer-box" required>
				<span>${currentQuestion.answers[i]}</span>
			</label>
		`);
	}
	fieldsetContainer.prepend(`<legend class="question-legend">${currentQuestion.question}</legend>`);

	$('body').append(questionForm);
	$('form').prepend(fieldsetContainer);

	autoFocusFirstInput();
}

function autoFocusFirstInput() {
	$('.question-form :input:enabled:visible:first').focus();
}

function submitUserAnswer() {
	// This function is responsible for when the user submits an answer
	$('body').on('submit','.js-question-form', function(event) {
		event.preventDefault();

		const userAnswer = $('input[name=answer]:checked').val();
		const correctAnswer = getQuestion(questionNumber-1).correctAnswer;
		
		if(validateUserAnswer(userAnswer,correctAnswer)){
			incrCurrentScore();
			updateHeaderScore();
		}

		renderFeedbackPartial(getQuestion(questionNumber-1),validateUserAnswer(userAnswer,correctAnswer));
	});
}

function validateUserAnswer(userAnswer, correctAnswer) {
	return userAnswer === correctAnswer ? true : false;
}

function incrCurrentScore() {
	currentScore++;
}

function renderFeedbackPartial(currentQuestion,answerEvaluationResult) {
	// This function is reponsible for rendering the feedback to an answer into the DOM
	removeMain();

	const feedbackTitleText = answerEvaluationResult ? 'Correct answer!' : 'Wrong answer.';
	
	const feedbackSubtitleText = answerEvaluationResult ? currentQuestion.feedback : `The correct answer is: ${currentQuestion.correctAnswer}`;

	const feedbackCard = `
	<main role="main" class="row animated fadeIn">
		<div class="col-10 col-10-offset">
			<div class="result-img-container">
				<img src="${currentQuestion.imageSrc}" alt="${currentQuestion.alt}" class="result-img js-result-img">	
			</div>
			<div class="result-message-container">
				<h2 class="result-message-title js-result-message-title">
					<span>${feedbackTitleText}</span>
				</h2>
				<p class="result-message-subtitle js-result-message-subtitle">
					<span>${feedbackSubtitleText}</span>
				</p>
			</div>	
			<button type="button" class="js-next-button">Next</button>
		</div>
	</main>
	`;

	$('body').append(feedbackCard);
	autoFocusButton();
}

function updateHeaderQuestion() {
	$('.js-question-number').text(questionNumber) // change text
	.closest('li').addClass('animated rubberBand'); // add animation class

	setTimeout(function() { // remove animation class
		$('.js-question-number').closest('li').removeClass('animated rubberBand');
	},500);
}

function updateHeaderScore() {
	$('.js-score-value').text(currentScore) 
	.closest('li').addClass('animated rubberBand');

	setTimeout(function() {
		$('.js-score-value').closest('li').removeClass('animated rubberBand');
	},500);
}

function goToNextQuestion() {
	// This function is responsible for going to the next question when the user clicks the button NEXT
	$('body').on('click','.js-next-button',function() {
		if (checkAvailableQuestions()) {
			renderQuestionPartial(getQuestion(questionNumber));
			incrQuestionNumber();
			updateHeaderQuestion();
		} else {
			renderFinalPartial(getFinalFeedback());
		}
	})
}

function checkAvailableQuestions() { 
	return questionNumber < 10 ? true : false;
}

function renderFinalPartial(feedbackData) {
	$('main').fadeOut('fast', function() {
		removeMessageTitle();

		$(this).find('.js-result-img')
		.attr('src',feedbackData.imageSrc)
		.attr('alt',feedbackData.alt);
	});

	setTimeout(function() {
		$('main').fadeIn('fast', function() {
		$('.js-result-message-subtitle').text(feedbackData.feedback);
		$('.js-next-button').text('Restart')
		.addClass('js-restart-button');
		autoFocusButton();
		});		
	},300);	
}

function removeMessageTitle() {
	$('.js-result-message-title').remove();
}

function getFinalFeedback() {
	// This function filters the final feedback data set depending on the final score
	if (currentScore === 0) {
		return finalFeedbackStore[0];
	} else if (currentScore>=1 && currentScore<=4) {
		return finalFeedbackStore[1];
	} else if (currentScore>=5 && currentScore<=9) {
		return finalFeedbackStore[2];
	} else {
		return finalFeedbackStore[3];
	}
}

function restartQuizApp() {
	$('body').on('click','.js-restart-button',function() {
		$('body').fadeOut('fast', function() {
			removeMain();
			hideHeader();
			resetQuestionScore();
			resetHeaderTextValues();
			startQuiz();
		});
	});
}

function hideHeader() {
	$('header').hide();
}

function resetQuestionScore() {
	questionNumber = 0;
	currentScore = 0;
}

function resetHeaderTextValues() {
	$('.js-score-value').text(0);
	$('.js-question-number').text(1);
}

function initializeQuizApp() {
	startQuiz();
	submitUserAnswer();	
	goToNextQuestion();
	restartQuizApp();
}


// This is the application main entry point
// An event listener that fires the function initializeQuizApp() when the entire page is finnished loading.

$(initializeQuizApp);