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
    image: "img/kepalaBanteng.png",
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
  {
    question: "Siapakah dua tokoh utama yang terlibat dalam pembacaan teks proklamasi pada 17 Agustus 1945?",
    answer: "a",
    options: ["A. Soekarno dan Mohammad Hatta", "B. Tan Malaka dan Sutan Sjahrir", "C.  Muhammad Yamin dan Agus Salim", "D. Soeharto dan Megawati Soekarnoputri"],
  },
  {
    question: "Apa yang diperingati pada Hari Ulang Tahun Pancasila setiap tanggal 1 Juni?",
    answer: "d",
    options: ["A. Hari Lahir Bung Karno", "B. Hari Lahir Mohammad Hatta", "C.  Hari Lahir Soekarno", "D. Hari Lahir Pancasila"],
  },
  {
    question: "Presiden Soekarno mengumumkan secara resmi berdirinya BKR pada tanggal..?",
    answer: "c",
    options: ["A. 23 Agustus 1945", "B. 19 Agustus 1945", "C.  18 Agustus 1945", "D. 22 Juni 1945"],
  },
  {
    question: "Gerakan 3A yang dibentuk oleh Jepang untuk menarik simpati bangsa Indonesia diketuai oleh?",
    answer: "a",
    options: ["A. Ir. Soekarno", "B. Mr. Sjamsudin", "C.  Ki Hajar Dewantara", "D. Moh. Hatta"],
  },
  {
    question: "Kapan hari dan tanggal diumumkannya proklamasi kemerdekaan Indonesia?",
    answer: "a",
    options: ["A. 17 Agustus 1945", "B. 14 Agustus 1945", "C. 21 September 1945", "D. 25 Desember 1945"],
  },
  {
    question: "Siapakah yang mengumumkan proklamasi kemerdekaan Indonesia?",
    answer: "b",
    options: ["A. Mohammad Hatta", "B.  Ir. Soekarno", "C.  Sutan Sjahrir", "D. Agus Salim"],
  },
  {
    question: "Di manakah Ir. Soekarno membacakan teks proklamasi kemerdekaan Indonesia?",
    answer: "d",
    options: ["A. Monumen Nasional (Monas), Jakarta", "B. Istana Bogor, Bogor", "C. Gedung Merdeka, Bandung", "D. Jalan Pegangsaan Timur No. 56, Jakarta Pusat"],
  },
  {
    question: "Apa kepanjangan PPKI?",
    answer: "b",
    options: ["A. Panitia Penyelidik Kemerdekaan Indonesia", "B.  Panitia Persiapan Kemerdekaan Indonesia", "C. Pusat Penelitian Kemerdekaan Indonesia", "D. Panitia Perjuangan Kemerdekaan Indonesia"],
  },
  {
    question: "Siapakah yang mengetik teks proklamasi Kemerdekaan Indonesia?",
    answer: "a",
    options: ["A. Sayuti Melik", "B. Haji Agus Salim", "C. Ki Hajar Dewantara", "D.  Mohamad Yamin"],
  },
  {
    question: "Bendera merah putih yang dikibarkan pada 17 Agustus 1945 disebut apa?",
    answer: "d",
    options: ["A. Bendera Merdeka", "B. Bendera Sang Saka Merah Putih", "C. Bendera Pusaka", "D. Bendera Pusaka Sang Saka Merah Putih"],
  },
  {
    question: "Siapakah yang menciptakan lagu 'Indonesia Raya'?",
    answer: "c",
    options: ["A. Ismail Marzuki", "B. Soe Hok Gie", "C. Wage Rudolf Soepratman", "D. Ahmad Dahlan"],
  },
  {
    question: "Kapan Sumpah Pemuda dicetuskan?",
    answer: "b",
    options: ["A. 17 Agustus 1945", "B. 28 Oktober 1928", "C. 1 Juni 1945", "D. 14 Juli 1930"],
  },
  {
    question: "Apa semboyan negara Indonesia?",
    answer: "c",
    options: ["A. Pancasila", "B. Tunggal Ika", "C. Bhinneka Tunggal Ika", "D. Garuda Pancasila"],
  },
  {
    question: "Apa arti Bhinneka Tunggal Ika?",
    answer: "c",
    options: ["A. Berdiri Bersama", "B. Satu Tujuan, Satu Negara", "C. Berbeda-beda tetapi tetap satu", "D. Kekuatan Rakyat"],
  },
  {
    question: "Hari Pendidikan Nasional diperingati setiap tanggal berapa?",
    answer: "b",
    options: ["A. 1 Juni", "B. 2 Mei", "C. 17 Agustus", "D. 10 November"],
  },
  {
    question: "Setiap 20 Mei kita memperingati hari apa?",
    answer: "c",
    options: ["A. Hari Kemerdekaan", "B. Hari Pendidikan Nasional", "C. Hari Kebangkitan Nasional", "D. Hari Pahlawan"],
  },
  {
    question: "Setiap 10 November kita memperingati hari apa?",
    answer: "d",
    options: ["A. Hari Kemerdekaan", "B. Hari Pendidikan Nasional", "C. Hari Kebangkitan Nasional", "D. Hari Pahlawan"],
  },
  {
    question: "Apa Tema HUT RI ke-78 pada 2023?",
    answer: "d",
    options: ["A. indonesia Maju Bersama", "B. Bersatu Untuk Kemajuan", "C. Terus Melaju untuk Indonesia Maju", "D. Kreativitas Menuju Kemajuan"],
  },
];

// awal mulai

// nilai awal
let soal = 0;
let jawabanBenar = 0;
let jawabanSalah = 0;
const totalSoal = 10;

const quizImage = document.querySelector(".quiz-container img");
const quizText = document.querySelector("#quiz");
const answerInput = document.querySelector("#answer");
const nextButton = document.querySelector("#next-quiz");
const restartButton = document.getElementById("restart-quiz");
const optionsList = document.getElementById("optionLi");
let pesanBenar = document.getElementById("benarfix");
const container = document.getElementById("container");
const informasi = document.getElementById("informasi");
const mulai = document.getElementById("mulai");
const startButton = document.getElementById("startButton");
const backgroundMusic = document.getElementById("backgroundMusic");

mulai.addEventListener("click", () => {
  container.classList.toggle("mulai");
  informasi.style.display = "none";
  backgroundMusic.play(); // Memutar musik saat tombol mulai diklik
});

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
    backgroundMusic.play();
  } else {
    jawabanSalah++;
    backgroundMusic.pause();
  }

  answerInput.value = "";
}

function benar() {
  pesanBenar.innerHTML = `${jawabanBenar}`;
}

function displayResult() {
  let resultMessage = "";
  if (jawabanBenar === totalSoal) {
    resultMessage = "Keren! musik nya engak pernah mati";
  } else if (jawabanBenar > 6 && jawabanBenar <= 10) {
    resultMessage = "Lumayan, musik anda mati sebanyak" + jawabanSalah + "kali";
  } else {
    resultMessage = "Anda pasti kurang belajar, musik anda mati sebanyak (" + jawabanSalah + ") kali";
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

function removePreviousQuestion(questionIndex) {
  questions.splice(questionIndex, 1);
}

function nextSoal() {
  removePreviousQuestion(soal);

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
