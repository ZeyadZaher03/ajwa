document.addEventListener("DOMContentLoaded", () => {
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

  const videoPopup = document.getElementById("video-popup");
  const popupVideo = document.getElementById("popup-video");
  const popupImage = document.getElementById("popup-image");
  const closeBtn = document.querySelector(".video-popup .close");
  const thumbnailImages = document.querySelectorAll(".pop-up-images");

  thumbnailImages.forEach((img) => {
    img.addEventListener("click", () => {
      const dataType = img.getAttribute("data-type");
      const dataSrc = img.getAttribute("data-src");

      if (dataType === "video") {
        popupImage.style.display = "none";
        popupVideo.style.display = "block";
        popupVideo.querySelector("#video-source").src = dataSrc;
        popupVideo.load();
        popupVideo.play();
      } else if (dataType === "image") {
        popupVideo.style.display = "none";
        popupImage.style.display = "block";
        popupImage.src = dataSrc;
      }

      videoPopup.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    videoPopup.style.display = "none";
    popupVideo.pause();
    popupVideo.querySelector("#video-source").removeAttribute("src");
    popupImage.removeAttribute("src");
    popupVideo.style.display = "none";
    popupImage.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === videoPopup) {
      videoPopup.style.display = "none";
      popupVideo.pause();
      popupVideo.querySelector("#video-source").removeAttribute("src");
      popupImage.removeAttribute("src");
      popupVideo.style.display = "none";
      popupImage.style.display = "none";
    }
  });
});
