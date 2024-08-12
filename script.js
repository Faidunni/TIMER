const images = ['url("images/pexel.jpg")', 'url("images/Fai.jpg")'];

const timerContainer = document.querySelector(".container");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timer = document.getElementById("countdown");
const wish = document.getElementById("text");
const birthdaySong = document.getElementById("birthdaySong");

const currentYear = new Date().getFullYear();
const future = new Date(`August 13, ${currentYear} 00:00:00`).getTime();

let currentImageIndex = 0; // Initialize the image index

const updateCountDown = setInterval(function () {
  const currentTime = new Date().getTime();
  const distance = future - currentTime;

  // Calculate days, hours, minutes, and seconds
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = d;
  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;

  // Set initial background image (if needed)
  if (distance > 0 && currentImageIndex === 0) {
    timerContainer.style.backgroundImage = images[currentImageIndex];
  }

  // When countdown reaches 0
  if (distance <= 0) {
    clearInterval(updateCountDown);

    // Hide the timer and show the birthday wish
    timer.style.opacity = 0;
    wish.style.opacity = 1;

    // Change the background image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    timerContainer.style.backgroundImage = images[currentImageIndex];

    // Play the Happy Birthday song
    birthdaySong.play();
  }
}, 1000);
