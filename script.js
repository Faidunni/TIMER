const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const timer = document.getElementById("countdown");
const wish = document.getElementById("text");

const currentYear = new Date().getFullYear();
const future = new Date(`August 13 ${currentYear} 00:00:00`).getTime();

const updateCountDown = setInterval(function () {
  const currentTime = new Date();
  const distance = future - currentTime;

  // Calculate days, hours, minutes and seconds
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = d;
  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;

  if (distance <= 0) {
    clearInterval(updateCountDown);
    timer.style.opacity = 0;
    wish.style.opacity = 100;
  }
}, 1000);
