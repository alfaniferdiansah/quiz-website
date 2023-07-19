const quizData = [
  {
    question: "1. Apa type battlesuit Drive Komete?",
    a: "A. BIO",
    b: "B. PSY",
    c: "C. MECH",
    d: "D. QUA",
    correct: "b",
  },
  {
    question: "2. Apa yang terjadi ketika QTE Swallowtail Phantasm mengenai musuh?",
    a: "A. Musuh berubah menjadi type QUA",
    b: "B. Musuh terkena Quantum Implosion",
    c: "C. Memulihkan Veil dan SP setra memasuki Phase Wrap",
    d: "D. Memasuki Burst Mode",
    correct: "c",
  },

  {
    question: "3. Manakah boss yang paling cocok dilawan oleh Sulene's Elegy?",
    a: "A. Jizo Mitama",
    b: "B. Benares yang dapat berubah menjadi type elemen api",
    c: "C. Kallen",
    d: "D. Homu Emperor",
    correct: "b",
  },
  {
    question: "4. Bagaimana Reverist Calico memicu skill QTE Silerwing:N-EX?",
    a: "A. Perfect dodge akan memicu global time fracture",
    b: "B. Melancarkan serangan khusus[Predation]",
    c: "C. Semua pilihan benar",
    d: "D. Melancarkan ultimate untuk membekukan musuh",
    correct: "c",
  },
  {
    question: "5. Apa peran Disciplinary Predition?",
    a: "A. Battlesuit DPS Ice type BIO",
    b: "B. Battlesuit DPS Linghtning type BIO",
    c: "C. Battlesuit DPS Linghtning type PSY",
    d: "D. Battlesuit DPS Linghtning type IMG",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const jawabanBenar = ()=>{
  jwbBnr = quizData.correct
  console.log(jwbBnr)
}

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = true));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2 style="text-align: center;">HASIL TEST : ${score}/${quizData.length}</h2>
      <h1 style="text-align: center;">Selamat Anda mendapatkan hadiah Xiaomi Note 11 Pro</h1>
      <audio controls style="display: block; margin: 0 auto; padding:50px;">
        <source src="./tapi boong.mp3" type="audio/mpeg">
        <p>Browser Anda tidak mendukung elemen audio.</p>
      </audio>
      
      <button onclick="location.reload()" style="display: block; margin: 0 auto;">COBALAGI</button>
      
            `;
    }
  }
});
