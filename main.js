const card = document.querySelectorAll(".card");
const front = document.querySelectorAll(".front");
const container = document.querySelector(".container-images");
const restartBtn = document.getElementById("restart");

function mixCards() {
  card.forEach((id) => {
    // определение нового порядкового номера карт
    const newId = [...Array(card.length).keys()];
    // console.log(newId);

    // генерация от 0 до до длины массива карт
    const random = Math.floor(Math.random() * card.length);

    // добавить смешивание через order (css)
    id.style.order = newId[random];
    console.log(newId[random]);
  });
}
mixCards();

function clickOnCard() {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
      // перевернуть карты
      front[i].classList.add("flip");
      const flippedCard = document.querySelectorAll(".flip");

      console.log(flippedCard);
      // console.log(card);
      // проверить, сколько карт перевернуто
      // если 2, то блокнуть
      if (flippedCard.length == 2) {
        container.style.pointerEvents = "none";

        setInterval(() => {
          container.style.pointerEvents = "all";
        }, 1000);
        // проверить, совпали ли карты
        match(flippedCard[0], flippedCard[1]);
      }
    });
  }
}
clickOnCard();

function match(cardOne, cardTwo) {
  if (cardOne.dataset.index == cardTwo.dataset.index) {
    // поменять классы
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");

    cardOne.classList.add("match");
    cardTwo.classList.add("match");
  } else {
    // вернуть обратно через 1-2 сек
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
    }, 1000);
  }
}

// не закрывает карты
restartBtn.addEventListener("click", () => {
  mixCards();
  clickOnCard();
});
