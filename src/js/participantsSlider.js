"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("participantList");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const sliderCounter = document.getElementById("sliderCounter");

  const totalCards = slider.children.length;
  let cardsPerSlide = 3;
  let currentIndex = 0;
  let timerId = null;

  const updateCounter = () => {
    sliderCounter.textContent = `${Math.min(
      currentIndex + cardsPerSlide,
      totalCards
    )} / ${totalCards}`;
  };

  const updateSliderPosition = () => {
    const cardWidth = slider.children[0].offsetWidth;
    const offset = -(currentIndex * (cardWidth + 20));
    slider.style.transform = `translateX(${offset}px)`;
    updateCounter();
  };

  const nextSlide = () => {
    currentIndex += cardsPerSlide;
    if (currentIndex >= totalCards) {
      currentIndex = 0;
    }
    updateSliderPosition();
  };

  const prevSlide = () => {
    currentIndex -= cardsPerSlide;
    if (currentIndex < 0) {
      currentIndex =
        Math.ceil(totalCards / cardsPerSlide) * cardsPerSlide - cardsPerSlide;
    }
    updateSliderPosition();
  };

  const startAutoSlide = () => {
    timerId = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(timerId);
  };

  const resetAutoSlide = () => {
    clearTimeout(timeoutId);
    stopAutoSlide();
    timeoutId = setTimeout(() => {
      startAutoSlide();
    }, 4000);
  };

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  const handleResize = () => {
    if (window.matchMedia("(max-width: 576px)").matches) {
      cardsPerSlide = 1;
    } else if (window.matchMedia("(max-width: 900px)").matches) {
      cardsPerSlide = 2;
    } else {
      cardsPerSlide = 3;
    }
    updateSliderPosition();
  };

  handleResize();
  startAutoSlide();
  updateCounter();

  window.addEventListener("resize", handleResize);
});
