document.addEventListener("DOMContentLoaded", function () {
  const participants = [
    {
      name: "Хосе-Рауль Капабланка",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Эммануил Ласкер",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Александр Алехин",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Арон Нимцович",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Рихард Рети",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Остап Бендер",
      description: "Гроссмейстер",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Гарри Каспаров",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Магнус Карлсен",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
    {
      name: "Вишванатан Ананд",
      description: "Чемпион мира по шахматам",
      img: "img/player.png",
      img2x: "img/player@2x.png",
      imgWebp: "img/player.webp",
      imgWebp2x: "img/player@2x.webp",
    },
  ];

  const participantList = document.getElementById("participantList");

  participants.forEach((participant) => {
    const listItem = document.createElement("li");
    listItem.className = "slider__card";
    listItem.innerHTML = `
          <div class="slider__card-img">
              <picture>
                  <source srcset="${participant.imgWebp}, ${participant.imgWebp2x} 2x" type="image/webp" />
                  <img src="${participant.img}" srcset="${participant.img}, ${participant.img2x} 2x" alt="фото участника" />
              </picture>
          </div>
          <h3 class="slider__card-name">${participant.name}</h3>
          <p class="slider__card-description">${participant.description}</p>
          <button class="btn-secondary">Подробнее</button>
      `;
    participantList.appendChild(listItem);
  });
});
