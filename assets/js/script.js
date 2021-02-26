var timeCount = 50;
var timer;
var questionIndex = 0;
var questionInAction;
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
  var selectedQuestion = Object.entries(questions[questionIndex]);

  console.log(selectedQuestion);

  questionInAction = selectedQuestion[0][1];

  console.log(questionInAction);

  for (var i = 1; i < selectedQuestion.length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedQuestion.length);
    answerOptionsInAction[i - 1] = selectedQuestion[randomIndex][1];
    selectedQuestion.splice(randomIndex, 1);
  }
}

loadQuestion();