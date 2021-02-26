var timeCount = 50;
var timer;
var questionIndex = 0;
var questionInActionEl = document.querySelector(".question-section-h1");
var answerOptionsInActionEl = document.querySelector(".answer-section-list");
var answerOptionsInAction = [];
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
      value: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
      answer: true
    },

    option1: {
      value: "document.getElement(“geek”).innerHTML=”I am a Geek”;",
      answer: false
    },
    option2: {
      value: "document.getId(“geek”)=”I am a Geek”;",
      answer: false
    },
    option3: {
      value: "document.getElementById(“geek”).innerHTML=I am a Geek;",
      answer: false
    }
  },
  {
    question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    option0: {
      value: "alert(“GeeksforGeeks”);",
      answer: true
    },
    option1: {
      value: "alertbox(“GeeksforGeeks”);",
      answer: false
    },
    option2: {
      value: "msg(“GeeksforGeeks”);",
      answer: false
    },
    option3: {
      value: "msgbox(“GeeksforGeeks”);",
      answer: false
    }
  },
  {
    question: "What is the correct syntax for referring to an external script called “geek.js”?",
    option0: {
      value: "<script src=”geek.js”>",
      answer: true
    },
    option1: {
      value: "<script href=”geek.js”>",
      answer: false
    },
    option2: {
      value: "<script ref=”geek.js”>",
      answer: false
    },
    option3: {
      value: "<script name=”geek.js”>",
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

// function startTimer() {
//   timer = setInterval(function () {
//     timeCount--;

//     // load question

//     if (timeCount == 0) {
//       clearInterval(timeCount);
//     }
//   }, 1000);
// }

function loadQuestion() {
  let selectedQuestion = questions[questionIndex];
  let optionsInArray = [selectedQuestion.option0, selectedQuestion.option1, selectedQuestion.option2, selectedQuestion.option3];
  var i = 0;

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

function checkAnswer(event) {
  let element = event.target
  let elementDataValue = element.getAttribute("data-value");

  if (elementDataValue !== null) {
    let correctAnswer = questions[questionIndex].option0.value;

    if (elementDataValue === correctAnswer) {
      console.log(true);
    }
    else {
      console.log(false);
    }
  }
}

answerOptionsInActionEl.addEventListener("click", checkAnswer);

loadQuestion();