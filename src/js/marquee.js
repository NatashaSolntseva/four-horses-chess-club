"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const contentData = [
    "Дело помощи утопающим — дело рук самих утопающих!",
    "Шахматы двигают вперёд не только культуру, но и экономику!",
    "Лёд тронулся, господа присяжные заседатели!",
  ];

  const dotImageSrc = "icons/dot.svg";

  const sections = document.querySelectorAll(".line");

  function createList(contentData, dotImageSrc) {
    const ul = document.createElement("ul");
    ul.classList.add("line__content");

    contentData.forEach((text) => {
      const liTextItem = document.createElement("li");
      liTextItem.classList.add("line__text-item");
      liTextItem.textContent = text;

      const liDot = document.createElement("li");
      liDot.classList.add("line__dots");
      const img = document.createElement("img");
      img.src = dotImageSrc;
      img.alt = "точка";

      liDot.appendChild(img);

      ul.appendChild(liTextItem);
      ul.appendChild(liDot);
    });
    return ul;
  }

  sections.forEach((section) => {
    const firstList = createList(contentData, dotImageSrc);
    const secondList = createList(contentData, dotImageSrc);
    secondList.setAttribute("aria-hidden", "true");

    section.appendChild(firstList);
    section.appendChild(secondList);
  });
});
