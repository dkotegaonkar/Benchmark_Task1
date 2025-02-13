var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.currentQuestionIndex = -1;
        this.score = 0;
    }
    Quiz.prototype.getCurrentQuestion = function () {
        return this.questions[this.currentQuestionIndex];
    };
    Quiz.prototype.checkAnswer = function (answer) {
        var currentQuestion = this.getCurrentQuestion();
        if (answer === currentQuestion.correctAnswer) {
            this.score++;
            return true;
        }
        return false;
    };
    Quiz.prototype.nextQuestion = function () {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    };
    Quiz.prototype.getScore = function () {
        return this.score;
    };
    Quiz.prototype.isOver = function () {
        return this.currentQuestionIndex > this.questions.length - 1;
    };
    return Quiz;
}());
var questions = [
    { question: "What is 2 + 2?", choices: ["3", "4", "5"], correctAnswer: "4" },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris",
    },
];
var quiz = new Quiz(questions);
var btnStart = document.getElementById("start");
var questionContent = document.querySelector("#question-content p");
var choiceslist = document.getElementById("choices");
var timer;
var timerDisplay = document.getElementById("timer");
function startTimer() {
    var timeLeft = 10;
    timerDisplay.textContent = "Time Left: ".concat(timeLeft, "s");
    timer = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = "Time Left: ".concat(timeLeft, "s");
        if (timeLeft === 0) {
            clearInterval(timer);
            load();
        }
    }, 1000);
}
function load() {
    choiceslist.innerHTML = "";
    clearInterval(timer);
    if (quiz.nextQuestion() && !quiz.isOver()) {
        btnStart.remove();
        var currentQuestion = quiz.getCurrentQuestion();
        questionContent.textContent = currentQuestion.question;
        startTimer();
        currentQuestion.choices.forEach(function (choice) {
            var option = document.createElement("button");
            option.className = "btn btn-primary";
            option.textContent = choice;
            option.addEventListener("click", function () {
                clearInterval(timer);
                if (quiz.checkAnswer(choice)) {
                    option.classList.remove("btn-primary");
                    option.classList.add("btn-success");
                    setTimeout(function () { return load(); }, 1000);
                }
                else {
                    option.classList.remove("btn-primary");
                    option.classList.add("btn-danger");
                    setTimeout(function () { return load(); }, 1000);
                }
            });
            choiceslist.appendChild(option);
        });
    }
    else {
        questionContent.textContent = "Quiz Completed";
        timerDisplay.textContent = "";
        var final_score = document.createElement("h2");
        final_score.textContent = "Your Score is ".concat(quiz.getScore());
        choiceslist.appendChild(final_score);
    }
}
btnStart.addEventListener("click", function () { return load(); });
