// Presenter
(function () {
 
	window.QuizPresenter = {}
 
	var $form = $('#quiz-form')
 
	QuizPresenter.renderQuizzes = function () {
		$form.find('.questions').empty()
		var questionDivs = Quiz.questions.map(function (question) {
			return $('<div>').addClass('question').append(
				$('<h3>').text(question.content),
 
				question.options.map(function (option) {
					return $('<div>').addClass('option').attr('data-id', question.id).append(
						$('<input>').attr({ type: 'radio', name: 'question_'+question.id }),
						$('<label>').text(option)
					)
				})
			)
		})
		$form.find('.questions').append(questionDivs)
	}
 
	$form.on('submit', function (e) {
		e.preventDefault()
		console.log("You submitted")
		// Read user inputs from the view
		// Update your quiz (score)
		$form.find('.option:is(selected)').map(function (idx, elem) {
			console.log(idx, $(elem).attr('data-id'))
		})
		var answers = [
			{ id: 1, answer: 2 },
			{ id: 2, answer: 0 },
		]
		Quiz.calculateScore(answers)
		// Show score to user
		return false
	})
 
 
})()