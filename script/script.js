const questions = [
  {
    image: "img/jokowi.png",
    question: "Siapa nama tokoh di atas?",
    answer: "A",
    options: ["A. Jokowi", "B. Prabowo", "C. Megawati", "D. Susilo Bambang Yudhoyono"],
  },
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

// awal mulai

// nilai awal
let soal = 0;
let jawabanBenar = 0;
let jawabanSalah = 0;
const totalSoal = 2;

const quizImage = document.querySelector(".quiz-container img");
const quizText = document.querySelector("#quiz");
const answerInput = document.querySelector("#answer");
const nextButton = document.querySelector("#next-quiz");
const restartButton = document.getElementById("restart-quiz");
const optionsList = document.getElementById("optionLi");
let pesanBenar = document.getElementById("benarfix");

ngecekSoal();
soalSoal(soal);

answerInput.addEventListener("input", (event) => {
  const userInput = event.target.value.toLowerCase();
  if (!["a", "b", "c", "d"].includes(userInput)) {
    event.target.value = "";
    alert("hanya boleh huruf A,B,C,D");
  }
});

nextButton.addEventListener("click", () => {
  if (answerInput.value.trim() === "") {
    alert("Silakan masukkan jawaban sebelum melanjutkan.");
    return;
  }

  reviewJawaban();
  nextSoal();
});

restartButton.addEventListener("click", () => {
  if (jawabanBenar > 0) {
    jawabanBenar.innerHTML = "0";
  }
  restartQuiz();
});

function randomSoal(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ngecekSoal() {
  randomSoal(questions);
}

function soalSoal(questionIndex) {
  const currentQuestionObj = questions[questionIndex];

  quizImage.src = currentQuestionObj.image;
  quizText.textContent = currentQuestionObj.question;

  optionsList.innerHTML = "";

  currentQuestionObj.options.forEach((option, index) => {
    const liElement = document.createElement("li");
    liElement.textContent = option;
    liElement.dataset.optionIndex = index; // Attach the option index as a data attribute
    optionsList.appendChild(liElement);
  });
}

function reviewJawaban() {
  const userAnswer = answerInput.value.trim().toLowerCase().replace(/\s+/g, "");
  const correctAnswer = questions[soal].answer.toLowerCase().replace(/\s+/g, "");

  if (userAnswer === correctAnswer) {
    jawabanBenar++;
    benar();
  } else {
    jawabanSalah++;
  }

  answerInput.value = "";
}

function benar() {
  pesanBenar.innerHTML = `${jawabanBenar}`;
}

function displayResult() {
  let resultMessage = "";
  if (jawabanBenar === totalSoal) {
    resultMessage = "Keren!";
  } else if (jawabanBenar > 6 && jawabanBenar <= 10) {
    resultMessage = "Lumayan";
  } else {
    resultMessage = "Anda pasti kurang belajar";
  }

  quizText.textContent = `Skor Anda: ${jawabanBenar}, dari ${totalSoal} soal`;
  const notification = document.createElement("p");
  notification.textContent = resultMessage;
  document.querySelector(".quiz-container").appendChild(notification);

  quizImage.style.display = "none";
  answerInput.style.display = "none";
  nextButton.style.display = "none";
  optionsList.style.display = "none";

  restartButton.style.display = "block";
}

function nextSoal() {
  soal++;

  if (soal < totalSoal) {
    soalSoal(soal);
  } else {
    displayResult();
  }
}

function restartQuiz() {
  jawabanBenar = 0;
  jawabanSalah = 0;
  soal = 0;
  ngecekSoal();
  soalSoal(soal);

  const notification = document.querySelector(".quiz-container p");
  if (notification) {
    notification.remove();
  }

  pesanBenar.innerHTML = "0";

  restartButton.style.display = "none";
  answerInput.style.display = "block";
  nextButton.style.display = "block";
  optionsList.style.display = "block";
  quizImage.style.display = "block";
}
ngecekSoal();
soalSoal(soal);
