const questions = [
  // {
  //   image: "img/jokowi.png",
  //   question: "Siapa nama tokoh di atas?",
  //   answer: "jokowidodo",
  //   options: ["Jokowi", "Prabowo", "Megawati", "Susilo Bambang Yudhoyono"],
  // },
  {
    // gambar bj habibie
    image: "img/habibie.png",
    question: "Tokoh pada gambar Di atas menjabat sebagai Presiden Ke?",
    answer: "c",
    options: ["A. satu", "B. dua", "C. tiga", "D. empat"],
  },
  {
    // gambar bintang
    image: "img/bintangSimbol.png",
    question: "gambar di atas merupakan lambang pancasila ke?",
    answer: "b",
    options: ["A. dua", "B. satu", "C. lima", "D. empat"],
  },
  {
    //gambar tuanku iman bonjol
    image: "img/imanBonjol.png",
    question: "berasal dari mana tokoh pada gambar di atas?",
    answer: "d",
    options: ["A. Jawa", "B. Bali", "C. Sumatra Timur", "D. Sumatra Barat"],
  },
  {
    // gambar suekarno
    image: "img/soekarno.png",
    question: "siapa nama tokoh di atas?",
    answer: "a",
    options: ["A. Ir. Soekarno", "B. H. Agus Salim", "C. Mr. Moh Yamin", "D. Drs. Moh. Hatta"],
  },
  {
    // gambar pulau jawa
    image: "img/jawa.png",
    question: "gambar peta di atas merupakan peta dari provinsi?",
    answer: "b",
    options: ["A. Bali", "B. Jawa", "C. Sumatra Timur", "D. Sumatra Barat"],
  },
  {
    // gambar pulau bali
    image: "img/bali.png",
    question: "gambar peta di atas merupakan peta dari provinsi?",
    answer: "b",
    options: ["A. Jawa", "B. Bali", "C. Sumatra Timur", "D. Sumatra Barat"],
  },
  {
    // gambar alat musik ketipung
    image: "img/ketipungJawaT.png",
    question: "alat musik pada gambar di samping berasal dari?",
    answer: "c",
    options: ["A. Sumatra", "B. Bali", "C. jawa Timur", "D. Sumatra Barat"],
  },
  {
    // Gambar : pohon beringin
    image: "img/pohonberingin.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "c",
    options: ["A. satu", "B. dua", "C. tiga", "D. empat"],
  },
  {
    // Gambar : Rantai Emas
    image: "img/rantai.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "b",
    options: ["A. satu", "B. lima", "C. tiga", "D. empat"],
  },
  {
    // Gambar : Kepala Banteng
    image: "img/kepalabanteng.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "c",
    options: ["A. satu", "B. dua", "C. tiga", "D. lima"],
  },
  {
    // Gambar : Padi dan Kapas.
    image: "img/padikapas.png",
    question: "gambar diatas merupakan lambang pancasila ke?",
    answer: "b",
    options: ["A. satu", "B. lima", "C. tiga", "D. empat"],
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalQuestions = 5;

const quizImage = document.querySelector(".quiz-container img");
const quizText = document.querySelector("#quiz");
const answerInput = document.querySelector("#answer");
const nextButton = document.querySelector("#next-quiz");
const restartButton = document.getElementById("restart-quiz");
const optionsList = document.getElementById("optionLi");

shuffleQuestions();
displayQuestion(currentQuestion);

function shuffleQuestions() {
  shuffleArray(questions);
}

questions[currentQuestion].options.forEach((option) => {
  const liElement = document.createElement("li");
  liElement.textContent = option;
  optionsList.appendChild(liElement);
});

shuffleQuestions(); // Mengacak pertanyaan
displayQuestion(currentQuestion);

answerInput.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();

  // Hanya izinkan huruf a, b, c, atau d
  if (!["a", "b", "c", "d"].includes(userInput)) {
    event.target.value = "";
  }
});

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
  shuffleQuestions();
  displayQuestion(currentQuestion);

  // Hapus elemen pesan benar dan pesan salah
  document.getElementById("benar").innerHTML = "";
  document.getElementById("salah").innerHTML = "";

  const notification = document.querySelector(".quiz-container p");
  if (notification) {
    notification.remove();
  }

  optionsList.style.display = "block";
  restartButton.style.display = "none";
  answerInput.style.display = "block";
  nextButton.style.display = "block";
  quizImage.style.display = "block";

  // Hapus elemen opsi sebelum mengisi ulang opsi-opsi pertanyaan
  optionsList.innerHTML = "";

  // Isi ulang opsi-opsi pertanyaan
  questions[currentQuestion].options.forEach((option) => {
    const liElement = document.createElement("li");
    liElement.textContent = option;
    optionsList.appendChild(liElement);
  });

  answerInput.value = ""; // Bersihkan nilai input
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

  optionsList.innerHTML = ""; // Clearing previous options

  questions[questionIndex].options.forEach((option) => {
    const liElement = document.createElement("li");
    liElement.textContent = option;
    optionsList.appendChild(liElement);
  });
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
  optionsList.style.display = "none";

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
  shuffleQuestions();
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
