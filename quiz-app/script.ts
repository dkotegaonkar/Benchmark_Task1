interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

class Quiz {
  private questions: Question[];
  private currentQuestionIndex: number;
  private score: number;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.currentQuestionIndex = -1;
    this.score = 0;
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  checkAnswer(answer: string): boolean {
    const currentQuestion = this.getCurrentQuestion();
    if (answer === currentQuestion.correctAnswer) {
      this.score++;
      return true;
    }
    return false;
  }

  nextQuestion(): boolean {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  getScore(): number {
    return this.score;
  }

  isOver(): boolean {
    return this.currentQuestionIndex > this.questions.length - 1;
  }
}

const questions: Question[] = [
  { question: "What is 2 + 2?", choices: ["3", "4", "5"], correctAnswer: "4" },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    correctAnswer: "Paris",
  },
];
const quiz = new Quiz(questions);

const btnStart = document.getElementById("start") as HTMLButtonElement;
const questionContent = document.querySelector("#question-content p")!;
const choiceslist = document.getElementById("choices")!;

let timer: number;
const timerDisplay = document.getElementById("timer")!;
function startTimer() {
  let timeLeft = 10;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timer);
      load();
    }
  }, 1000);
}


function load(): void {
  choiceslist.innerHTML = "";
  clearInterval(timer);

  if (quiz.nextQuestion() && !quiz.isOver()) {
    btnStart.remove();
    const currentQuestion = quiz.getCurrentQuestion();

    questionContent.textContent = currentQuestion.question;

    startTimer();

    currentQuestion.choices.forEach((choice) => {
      const option = document.createElement("button");
      option.className = "btn btn-primary";
      option.textContent = choice;
      option.addEventListener("click", () => {
        clearInterval(timer);

        if (quiz.checkAnswer(choice)) {
          option.classList.remove("btn-primary");
          option.classList.add("btn-success");
          setTimeout(() => load(), 1000);
        } else {
          option.classList.remove("btn-primary");
          option.classList.add("btn-danger");
          setTimeout(() => load(), 1000);
        }
      });
      choiceslist.appendChild(option);
    });
  } else {
    questionContent.textContent = "Quiz Completed";
    timerDisplay.textContent = "";
    const final_score = document.createElement("h2");
    final_score.textContent = `Your Score is ${quiz.getScore()}`;
    choiceslist.appendChild(final_score);
  }
}

btnStart.addEventListener("click", () => load());
