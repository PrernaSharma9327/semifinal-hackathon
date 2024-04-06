document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
});
