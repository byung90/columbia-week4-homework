var timeCount = 50;
var timer;
var questionIndex = 0;
var mainEl = document.querySelector("#main");
var quizSectionEl = document.querySelector(".quiz-section");
var timerSectionEl = document.querySelector(".timer-section");
var scoreSectionEl = document.querySelector(".score-section");
var gameOverSectionEl = document.querySelector(".game-over-section");
var questionInActionEl = document.querySelector(".question-section-h1");
var answerOptionsInActionEl = document.querySelector(".answer-section-list");
var timerEl = document.querySelector(".timer-section-h1");
var answerOptionsInAction = [];
var score = 0;
var highScore;
var questions = [
  {
    question: "What is the HTML tag under which one can write the JavaScript code?",
    option0: {
      value: "<script>",
      answer: true
    },
    option1: {
      value: "<javascript>",
      answer: false
    },
    option2: {
      value: "<scripted>",
      answer: false
    },
    option3: {
      value: "<js>",
      answer: false
    }
  },
  {
    question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
    option0: {
      value: "document.getElementById(\"geek\").innerHTML=\"I am a Geek\";",
      answer: true
    },

    option1: {
      value: "document.getElement(\"geek\").innerHTML=\"I am a Geek\";",
      answer: false
    },
    option2: {
      value: "document.getId(\"geek\")=\"I am a Geek\";",
      answer: false
    },
    option3: {
      value: "document.getElementById(\"geek\").innerHTML=I am a Geek;",
      answer: false
    }
  },
  {
    question: "Which of the following is the correct syntax to display \"GeeksforGeeks\" in an alert box using JavaScript?",
    option0: {
      value: "alert(\"GeeksforGeeks\");",
      answer: true
    },
    option1: {
      value: "alertbox(\"GeeksforGeeks\");",
      answer: false
    },
    option2: {
      value: "msg(\"GeeksforGeeks\");",
      answer: false
    },
    option3: {
      value: "msgbox(\"GeeksforGeeks\");",
      answer: false
    }
  },
  {
    question: "What is the correct syntax for referring to an external script called \"geek.js\"?",
    option0: {
      value: "<script src=\"geek.js\">",
      answer: true
    },
    option1: {
      value: "<script href=\"geek.js\">",
      answer: false
    },
    option2: {
      value: "<script ref=\"geek.js\">",
      answer: false
    },
    option3: {
      value: "<script name=\"geek.js\">",
      answer: false
    }
  },
  {
    question: "Predict the output of the following JavaScript code.",
    option0: {
      value: "88",
      answer: true
    },
    option1: {
      value: "16",
      answer: false
    },
    option2: {
      value: "Compilation Error",
      answer: false
    },
    option3: {
      value: "Run Time Error",
      answer: false
    }
  }
];

//Start Timer
function startTimer() {
  timer = setInterval(function () {
    timeCount--;

    if (timeCount >= 0) {
      timerEl.textContent = timeCount;
    }
    else {
      gameOver();
    }
  }, 1000);
}


//Load a question
function loadQuestion() {
  if (questionIndex < questions.length) {
    let selectedQuestion = questions[questionIndex];
    let optionsInArray = [selectedQuestion.option0, selectedQuestion.option1, selectedQuestion.option2, selectedQuestion.option3];
    var i = 0;

    let lineItemsEl = document.querySelectorAll("li");
    if (lineItemsEl.length > 0) {
      for (var x = 0; x < lineItemsEl.length; x++) {
        lineItemsEl[x].remove();
      }
    }

    while (optionsInArray.length > 0) {
      var randomIndex = Math.floor(Math.random() * optionsInArray.length);
      answerOptionsInAction[i] = optionsInArray[randomIndex];
      optionsInArray.splice(randomIndex, 1);
      i++;
    }

    questionInActionEl.textContent = selectedQuestion.question;

    for (var x = 0; x < answerOptionsInAction.length; x++) {
      let lineItemEl = document.createElement("li");
      let lineItemButtonEl = document.createElement("button");
      lineItemButtonEl.textContent = answerOptionsInAction[x].value;
      lineItemButtonEl.setAttribute("data-value", answerOptionsInAction[x].value);
      lineItemEl.append(lineItemButtonEl);
      answerOptionsInActionEl.append(lineItemEl);
    }
  }
  else {
    gameOver();
  }
}

// Check if selected answer is correct
function checkAnswer(event) {
  let element = event.target
  let elementDataValue = element.getAttribute("data-value");

  if (elementDataValue !== null) {
    let correctAnswer = questions[questionIndex].option0.value;

    if (elementDataValue === correctAnswer) {
      questionIndex++;
      updateScore();
      loadQuestion();
    }
    else {
      timeCount -= 5;
      if (timeCount >= 0) {
        timerEl.textContent = timeCount;
      }
      else {
        timerEl.textContent = 0;
      }
    }
  }
}

// Add Update Score
function updateScore() {
  score += 4;
}

// Game Over
function gameOver() {
  clearInterval(timer);

  quizSectionEl.style.display = "none";
  timerSectionEl.style.display = "none";
  scoreSectionEl.style.display = "block";

  if (timeCount > 0) {
    score += timeCount;
  }
  else {
    score = 0;
  }


  //Display Score
  let scoreDisplayEl = document.createElement("h1");
  scoreDisplayEl.textContent = "Your score is " + score + "."

  //Form to Submit Score
  let initialsLabelEl = document.createElement("label");
  let initialsInputEl = document.createElement("input");
  let submitInitialEl = document.createElement("button");

  initialsLabelEl.textContent = "Initials:"
  initialsInputEl.setAttribute("id", "initials");
  submitInitialEl.setAttribute("id", "submit");
  submitInitialEl.textContent = "Submit";

  scoreSectionEl.append(scoreDisplayEl);
  scoreSectionEl.append(initialsLabelEl);
  scoreSectionEl.append(initialsInputEl);
  scoreSectionEl.append(submitInitialEl);

  //Submit Form
  submitInitialEl.addEventListener("click", function () {
    var initials = initialsInputEl.value;
    var scoreWithInitials = {
      initials: initials,
      score: score
    }
    highScore.push(scoreWithInitials);
    localStorage.setItem("savedScores", JSON.stringify(highScore));
    let playAgain = confirm("Your initial is " + initials + ".\n Your score is " + score + ".");

    if (playAgain) {
      timeCount = 50;
      score = 0;
      questionIndex = 0;

      scoreDisplayEl.remove();
      initialsLabelEl.remove();
      initialsInputEl.remove();
      submitInitialEl.remove();

      quizSectionEl.style.display = "block";
      timerSectionEl.style.display = "block";
      scoreSectionEl.style.display = "none";

      timerEl.textContent = 50;

      loadQuestion();
      startTimer();
      getSavedScores();
    }
    else {
      scoreSectionEl.style.display = "none";

      let gameOverEl = document.createElement("h1");
      gameOverEl.textContent = "Game Over";
      gameOverSectionEl.append(gameOverEl);
    }

  });


}

//Get all saved scores
function getSavedScores() {
  highScore = JSON.parse(localStorage.getItem("savedScores"));
}

answerOptionsInActionEl.addEventListener("click", checkAnswer);

loadQuestion();
startTimer();
getSavedScores();