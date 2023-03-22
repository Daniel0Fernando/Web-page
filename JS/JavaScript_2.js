(function(){
  clearTimeout(timer);
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
	let numWrong = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer == currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect+=2;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
	  
      // if answer is wrong or blank
	  }else
	  {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
	sec2=60-sec;
    // show number of correct answers out of total
    resultsContainer.innerHTML = `You have scored ${numCorrect} points out of 20 points. You took ${sec2} seconds to complete the quiz.`
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. Who invented guitar?",
      answers: {
        a: "Adolph Rickenbacker",
        b: "George Beauchamp",
        c: "Christian Fredrick Martin",
		d: "Les Paul"
      },
      correctAnswer: "c"
    },
    {
      question: "2. Who is the electric engineer who invented the electric guitar?",
      answers: {
        a: "Adolph Rickenbacker",
        b: "George Beauchamp",
        c: "Christian Fredrick Martin",
		d: "Les Paul"
      },
      correctAnswer: "a"
    },
    {
      question: "3. How many strings does a common guitar have?",
      answers: {
        a: "2",
        b: "4",
        c: "6",
        d: "8"
      },
      correctAnswer: "c"
    },
	{
	   question: "4. Who invented Violin?",
	   answers:{
		   a: "Antonio Stradivari",
		   b: "Les Paul",
		   c: "Andrea Amati",
		   d: "Adolph Rickenbacker"
	   },	
	   correctAnswer: "c" 	
	},
	{
		question: "5. Is violin a C instrument?",
		answers:{
			a:"YES",
			b:"NO",
		},
		correctAnswer:"a"
	},
	{
		question: "6. Who invented Piano?",
		answers:{
			a: "Christian Fredrick Martin",
			b: "Bartolomeo Cristofori",
			c: "Adolph Rickenbacker",
			d: "Les Paul"
		},
		correctAnswer:"b"
	},
	{
		question: "7. How many keys are in a Piano?",
		answers:{
			a: "82",
			b: "84",
			c: "86",
			d: "88"
		},
		correctAnswer:"d"
	},
	{
		question: "8. Was Sri Lanka also involved in discovering Drums?",
		answers:{
			a:"YES",
			b:"NO",
		},
		correctAnswer: "a"
	},
	{
		question: "9. Was Drums used to communicate in BC time?",
		answers:{
			a:"YES",
			b:"NO",
		},
		correctAnswer:"a"
	},
		{
		question: "10. Who invented the two row Xylophone?",
		answers:{
			a: "Lionel Hampton",
			b: "Albert Roth",
			c: "Adolph Rickenbacker",
			d: "Christian Fredrick Martin"
		},
		correctAnswer:"b",
	},
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();