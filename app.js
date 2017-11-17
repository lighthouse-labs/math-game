class MathQuestion {
  
  constructor() {
    this.number1 = this.randomNumber();
    this.number2 = this.randomNumber();
    this.answer = this.number1 + this.number2;
  }

  randomNumber() {
    return Math.round(Math.random() * 100);
  }

  checkAnswer(answer) {
    return this.answer === answer;
  }

  questionText() {
    return `What is ${this.number1} + ${this.number2}?`;
  }
}



class Player {
  constructor() {
    this.correct = [];
    this.incorrect = [];
  }

  addCorrectQuestion(question) {
    this.correct.push(question);
  }

  addIncorrectQuestion(question) {
    this.incorrect.push(question);
  }

  score() {
    return {
      correct: this.correct.length,
      incorrect: this.incorrect.length
    }
  }

  scoreText() {
    const score = this.score();
    return `correct: ${score.correct}, incorrect: ${score.incorrect}`;
  }
}

document.addEventListener("DOMContentLoaded", (event) => { 

  // DOM Elements
  const questionElement = document.querySelector("#math-question");
  const form = document.querySelector("#math-answer-form");
  const resultElement = document.querySelector("#math-question-result");
  const answerElement = document.querySelector("#math-answer-input");

  form.onsubmit = (event) => {
    event.preventDefault();
  
    let answer = Number(answerElement.value);

    answerQuestion(answer);
  };
  
  let question;
  let player = new Player();

  // Create a new question
  // Set the text of the question element
  // Clear the answer form element
  function setupNewQuestion() {
    question = new MathQuestion();
    questionElement.innerText = question.questionText();
    answerElement.value = "";
  }

  // Check if the answer is correct or not
  // Notify the user if they're correct or not
  // 
  function answerQuestion(answer) {
    if (question.checkAnswer(answer)) {
      player.addCorrectQuestion(question);
      alert("Correct 🤗");
    } else {
      player.addIncorrectQuestion(question);
      alert(`Incorrect, the correct answer is ${question.answer}`);
    }

    resultElement.innerText = player.scoreText();
    setupNewQuestion();
  }

  setupNewQuestion();
});