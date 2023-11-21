/* const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]; */

const domande = localStorage.getItem("questions");
let questions = JSON.parse(domande);
console.log(questions)

let punteggio = 0;
let questionNumber = 0;
let arrayAnswers = [];
let risposte = document.querySelector("#risposte");
let h1 = document.querySelector("h1#title2");
let arrayRisposteAzzeccate = [];
let arrayRisposteSbagliate = [];

window.addEventListener("load", setupQuestion);

function setupQuestion() {
  h1.innerText =questions[questionNumber].question;
  arrayAnswers = [
    ...questions[questionNumber].incorrect_answers,
    questions[questionNumber].correct_answer,
  ];
  arrayAnswers.sort(() => Math.random() - 0.5);

  let words = questions[questionNumber].question.trim().split(" ");
  let lastFourWords = words.slice(-4).join(" ");
  let restOfWords = words.slice(0, -4).join(" ");

  h1.innerHTML = restOfWords + " <span class='bold-last-4'>" + lastFourWords + "</span>";

  risposte.innerHTML = "";
  for (let i = 0; i < arrayAnswers.length; i++) {
    let divRisposta = document.createElement("div");
    divRisposta.classList.add("risposta");
    divRisposta.classList.add("risposta",`risposta${i+1}`);
    divRisposta.innerText = arrayAnswers[i];
    divRisposta.addEventListener("click", () =>{
      if (divRisposta.innerText===questions[questionNumber].correct_answer){
        divRisposta.style.backgroundImage = "none"
        divRisposta.style.backgroundColor = "green"
        divRisposta.addEventListener('mouseover', () => {
          divRisposta.style.backgroundColor = "green"
        })
        setTimeout(() => {
          changeQuestion(arrayAnswers[i]);
        }, 1000);
      }else{
        divRisposta.style.backgroundImage = "none"
        divRisposta.style.backgroundColor = "red"
        divRisposta.addEventListener('mouseover', () => {
          divRisposta.style.backgroundColor = "red"
        })
        setTimeout(() => {
          changeQuestion(arrayAnswers[i]);
        }, 1000);
        
      }
     
    } );
    risposte.appendChild(divRisposta);
  }

  updateQuestionCounter();
  handleTimer(time); // Imposta il timer per 5 secondi
}



function updateQuestionCounter() {
  let questionCounter = document.querySelector(".questionCounter");
  questionCounter.innerHTML = `<p class="questionCounter">QUESTION ${questionNumber + 1}<span>/${
    questions.length
  }</span> </p>`;
}

let timer = document.querySelector(".timer");
let time = 30000;
let currentInterval; // Variabile per tenere traccia dell'intervallo corrente

function handleTimer(time) {
  if (currentInterval) {
    clearInterval(currentInterval); // Cancella l'intervallo corrente prima di iniziarne uno nuovo
  }
  let remainingTime = time;
  let refreshInterval = 100;
  let totalCycles = time / refreshInterval;
  let remainingCycles = totalCycles;
  let divSecond = document.querySelector('#seconds');

  currentInterval = setInterval(() => {
    remainingCycles--;
    remainingTime -= refreshInterval;
    let degrees = (360 / totalCycles) * (totalCycles - remainingCycles);
    timer.style.background = `conic-gradient(from 0deg, rgb(131, 193, 211) ${degrees}deg, transparent ${degrees}deg)`;

    let timeInSeconds = Math.ceil(remainingTime / 1000);
    divSecond.innerText = timeInSeconds;

    if (remainingTime <= 0) {
      clearInterval(currentInterval);
      arrayRisposteSbagliate.push(questions[questionNumber]);
      changeQuestion();
      
    }
  }, refreshInterval);
}

function changeQuestion(selectedAnswer = '') {
  if (selectedAnswer && selectedAnswer === questions[questionNumber].correct_answer) {
    arrayRisposteAzzeccate.push(questions[questionNumber]);
  } else if (selectedAnswer) {
    arrayRisposteSbagliate.push(questions[questionNumber]);
  } 

  if (questionNumber < questions.length - 1) {
    questionNumber++;
    setupQuestion(); // Prepara la nuova domanda
  } else {
    localStorage.setItem("questions", questions.length);
    localStorage.setItem("arrayRisposteAzzeccate", arrayRisposteAzzeccate.length);
    localStorage.setItem("arrayRisposteSbagliate", arrayRisposteSbagliate.length);
    location.href = "index3.html";
  }
}

// effetto sfondo timer trasparente

function calcolaNuoveDimensioni(Wo, Ho, Wt, Ht) {
  let scalaOrizzontale = Wt / Wo;
  let scalaVerticale = Ht / Ho;
  let scalaFinale = Math.max(scalaOrizzontale, scalaVerticale);

  let Wn = Wo * scalaFinale;
  let Hn = Ho * scalaFinale;

  return { larghezza: Wn, altezza: Hn };
}

let larghezzaOriginale = 1024;
let altezzaOriginale = 768;

function applicaNuoveDimensioni() {
  let larghezzaViewport = window.innerWidth;
  let altezzaViewport = window.innerHeight;

  let nuoveDimensioni = calcolaNuoveDimensioni(larghezzaOriginale, altezzaOriginale, larghezzaViewport, altezzaViewport);

  let innerCircle = document.querySelector('.inner-circle');
  innerCircle.style.backgroundSize = `${nuoveDimensioni.larghezza}px ${nuoveDimensioni.altezza}px`;
}

// Aggiungi un gestore di eventi 'resize' alla finestra
window.addEventListener('resize', applicaNuoveDimensioni);

// Esegui la funzione iniziale per impostare le dimensioni iniziali
applicaNuoveDimensioni();