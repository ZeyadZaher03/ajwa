const sliderInner = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateSlider() {
  const slideWidth = window.innerWidth;
  sliderInner.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();
