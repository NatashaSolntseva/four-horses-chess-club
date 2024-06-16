document.addEventListener("DOMContentLoaded", function () {
  const logosContainer = document.createElement("div");
  logosContainer.classList.add("logo__icons");

  for (let i = 0; i < 4; i++) {
    const img = document.createElement("img");
    img.classList.add("logo__icon");
    img.setAttribute("src", "icons/logo.svg");
    img.setAttribute("alt", "лого");
    logosContainer.appendChild(img);
  }

  const logoLink = document.querySelector(".logo");

  if (logoLink) {
    logoLink.insertBefore(logosContainer, logoLink.firstChild);
  } else {
    console.error('Ссылка с классом "logo" не найдена');
  }
});
