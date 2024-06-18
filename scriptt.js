// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  const icon = themeToggle.querySelector("i");

  if (isDarkMode) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Update Last Updated Timestamp
const lastUpdatedSpan = document.getElementById("last-updated");
const currentDate = new Date().toLocaleString();
lastUpdatedSpan.textContent = currentDate;

// Home Section slider JS

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

// End of Home

function getGreeting() {
  const date = new Date();
  const hour = date.getHours();
  let greeting;

  if (hour >= 0 && hour < 11) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Hello";
  }

  return greeting;
}

const greetingSpan = document.getElementById("greeting");
greetingSpan.textContent = getGreeting();

// End of About
