"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("participantList");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const sliderCounter = document.getElementById("sliderCounter");

  const totalCards = slider.children.length;
  const cardsPerSlide = 3;
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
    if (currentIndex < totalCards - cardsPerSlide) {
      currentIndex += cardsPerSlide;
    } else {
      currentIndex = 0;
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

  nextBtn.addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= cardsPerSlide;
      updateSliderPosition();
    }

    stopAutoSlide();
  });

  startAutoSlide();

  updateCounter();
});
