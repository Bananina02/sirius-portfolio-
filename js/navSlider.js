const carouselContainer = document.querySelector(".nav__slider-wrap");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const posts = document.querySelectorAll(".nav__slide");

let currentIndex = 0;

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNext() {
  currentIndex = (currentIndex + 1) % posts.length;
  updateCarousel();
}

function moveToPrev() {
  currentIndex = (currentIndex - 1 + posts.length) % posts.length;
  updateCarousel();
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);
