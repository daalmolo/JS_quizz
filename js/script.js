const question = [
  {
    question:
      "Which of the following countries did not participate in the Korean War?",
    answer: [
      { text: "Turkey", correct: false },
      { text: "Australia", correct: false },
      { text: "Colombia", correct: false },
      { text: "Italia", correct: true },
    ],
  },
  {
    question: "Which is the densest planet in the solar system?",
    answer: [
      { text: "Saturn", correct: false },
      { text: "Earth", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Agamemnon was?",
    answer: [
      { text: "In Egypt history, a pharaon", correct: false },
      { text: "In Greek mythonlogy, a king", correct: true },
      { text: "In Nordic mythology, a heroe", correct: false },
      { text: "In Maya mythology, a god", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("btn__next");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let currentQuestion = question[currentQuestionIndex];

  let questionNo = currentQuestionIndex + 1;

  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
}

function showOption() {
  currentQuestion.answer.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;

    button.classList.add("btn");

    answerButton.appendChild(button);
  });
}

function startQuizz() {
  currentQuestionIndex = 0;
  score = 0;

  showQuestion();
  showOption();

  nextButton.innerHTML = next;
}

startQuizz();
