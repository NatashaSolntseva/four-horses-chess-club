"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".steps__container");
  const arrowBtns = document.querySelectorAll(".steps .slider__nav-btn");
  const firstCardWidth = slider.querySelector(".steps__card").offsetWidth;
  const arrowBtnLeft = document.getElementById("prevStepsBtn");
  const arrowBtnRight = document.getElementById("nextStepsBtn");
  const paginationDots = document.querySelectorAll(".mobile-nav__dot");

  const updateArrowBtnsState = () => {
    // console.log("slider.scrollLeft", slider.scrollLeft);
    if (slider.scrollLeft === 0) {
      arrowBtnLeft.setAttribute("disabled", "true");
    } else {
      arrowBtnLeft.removeAttribute("disabled");
    }
    // console.log("slider.offsetWidth", slider.offsetWidth);
    // console.log("slider.scrollWidth", slider.scrollWidth);
    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
      arrowBtnRight.setAttribute("disabled", "true");
    } else {
      arrowBtnRight.removeAttribute("disabled");
    }
  };

  const updatePaginationDots = () => {
    const activeIndex = Math.round(slider.scrollLeft / (firstCardWidth + 20));
    paginationDots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  };

  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      slider.scrollLeft +=
        btn.id === "prevStepsBtn" ? -firstCardWidth - 20 : firstCardWidth + 20;
      updateArrowBtnsState();
      updatePaginationDots();
    });
  });

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      slider.scrollLeft = index * (firstCardWidth + 20);
      updateArrowBtnsState();
      updatePaginationDots();
    });
  });

  let isDragging = false,
    startX,
    startScrollLeft;

  const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("steps__dragging");
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    slider.scrollLeft = e.pageX;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    isDragging = false;
    slider.classList.remove("steps__dragging");
    updateArrowBtnsState();
    updatePaginationDots();
  };

  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  slider.addEventListener("scroll", () => {
    updateArrowBtnsState();
    updatePaginationDots();
  });

  updateArrowBtnsState();
  updatePaginationDots();
});
