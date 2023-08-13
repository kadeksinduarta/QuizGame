const questions = [
  {
    image: "img/jokowi.png",
    question: "Siapa nama tokoh di atas?",
    answer: "jokowidodo",
  },
  {
    // gambar bj habibie
    image: "img/habibie.png",
    question: "Tokoh pada gambar Di atas menjabat sebagai Presiden Ke?",
    answer: "tiga",
  },
  {
    // gambar bintang
    image: "img/bintangSimbol.png",
    question: "gambar di atas merupakan lambang pancasila ke?",
    answer: "satu",
  },
  {
    //gambar tuanku iman bonjol
    image: "img/imanBonjol.png",
    question: "berasal dari mana tokoh pada gambar di atas?",
    answer: "Sumatra Barat",
  },
  {
    // gambar suekarno
    image: "img/soekarno.png",
    question: "siapa nama tokoh di atas?",
    answer: "ir.soekarno",
  },
  {
    // gambar pulau jawa
    image: "img/jawa.png",
    question: "gambar peta di atas merupakan peta dari provinsi?",
    answer: "jawa",
  },
  {
    // gambar pulau bali
    image: "img/bali.png",
    question: "gambar peta di atas merupakan peta dari provinsi?",
    answer: "bali",
  },
  {
    // gambar alat musik ketipung
    image: "img/ketipungJawaT.png",
    question: "alat musik pada gambar di samping berasal dari?",
    answer: "jawa timur",
  },
  {
    // Gambar : pohon beringin
    image: "img/pohonberingin.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "tiga",
  },
  {
    // Gambar : Rantai Emas
    image: "img/rantai.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "dua",
  },
  {
    // Gambar : Kepala Banteng
    image: "img/kepalabanteng.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "empat",
  },
  {
    // Gambar : Padi dan Kapas.
    image: "img/padikapas.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "lima",
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalQuestions = 2;

const quizImage = document.querySelector(".quiz-container img");
const quizText = document.querySelector("#quiz");
const answerInput = document.querySelector("#answer");
const nextButton = document.querySelector("#next-quiz");
const restartButton = document.getElementById("restart-quiz");

function shuffleQuestions() {
  shuffleArray(questions);
}

shuffleQuestions(); // Mengacak pertanyaan
displayQuestion(currentQuestion);

nextButton.addEventListener("click", () => {
  if (answerInput.value.trim() === "") {
    alert("Silakan masukkan jawaban sebelum melanjutkan.");
    return;
  }

  checkAnswer();
  showNextQuestion();
});

function restartQuiz() {
  correctAnswers = 0;
  wrongAnswers = 0;
  currentQuestion = 0;
  shuffleQuestions(); // Mengacak pertanyaan
  displayQuestion(currentQuestion);

  const notification = document.querySelector(".quiz-container p");
  if (notification) {
    notification.remove();
  }

  restartButton.style.display = "none";
  answerInput.style.display = "block";
  nextButton.style.display = "block";
  quizImage.style.display = "block";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayQuestion(questionIndex) {
  quizImage.src = questions[questionIndex].image;
  quizText.textContent = questions[questionIndex].question;
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase().replace(/\s+/g, "");
  const correctAnswer = questions[currentQuestion].answer.toLowerCase().replace(/\s+/g, "");

  if (userAnswer === correctAnswer) {
    correctAnswers++;
    benar();
  } else {
    wrongAnswers++;
    salah();
  }

  answerInput.value = "";
}

function salah() {
  let pesanSalah = document.getElementById("salah");
  pesanSalah.innerHTML = `Salah ${wrongAnswers} kali.`;
}

function benar() {
  let pesanBenar = document.getElementById("benar");
  pesanBenar.innerHTML = `banar ${correctAnswers} kali.`;
}

function displayResult() {
  let resultMessage = "";
  if (correctAnswers === totalQuestions) {
    resultMessage = "Keren!";
  } else if (correctAnswers > 6 && correctAnswers <= 10) {
    resultMessage = "Lumayan";
  } else {
    resultMessage = "Anda pasti kurang belajar";
  }

  quizText.textContent = `Skor Anda: Benar ${correctAnswers}, Salah ${wrongAnswers}`;
  const notification = document.createElement("p");
  notification.textContent = resultMessage;
  document.querySelector(".quiz-container").appendChild(notification);

  quizImage.style.display = "none";
  answerInput.style.display = "none";
  nextButton.style.display = "none";

  restartButton.addEventListener("click", () => {
    restartQuiz();
  });
  restartButton.style.display = "block";
}

function showNextQuestion() {
  currentQuestion++;

  if (currentQuestion < totalQuestions) {
    displayQuestion(currentQuestion);
  } else {
    displayResult();
  }
}

shuffleArray(questions);
displayQuestion(currentQuestion);

function restartQuiz() {
  correctAnswers = 0;
  wrongAnswers = 0;
  currentQuestion = 0;
  shuffleArray(questions);
  displayQuestion(currentQuestion);

  const notification = document.querySelector(".quiz-container p");
  if (notification) {
    notification.remove();
  }

  restartButton.style.display = "none";
  answerInput.style.display = "block";
  nextButton.style.display = "block";
  quizImage.style.display = "block";
}
