const main = document.querySelector(".main");
const cardForm = document.createElement("form");
// cardForm.classList.add(cardForm);
// cardForm.className(cardForm);
main.append(cardForm);

let arrayField = [];
let arrayCompare = [];
let arrayRight = [];

function startGame() {
  let fieldSize = prompt("Введите число, кратное 2");
  if (fieldSize % 2 == 0 && fieldSize > 0 && fieldSize != 0) {
    for (let i = 0; i < fieldSize / 2; i++) {
      arrayField.push(i);
      arrayField.push(i);
    }
    arrayField.sort(() => Math.random() - 0.5);
    // arrayField.sort(() => Math.floor(Math.random() * arrayField));
    console.log(arrayField);
  }
  gameField(fieldSize);
  return fieldSize;
}
startGame();

function gameField(fieldSize) {
  for (let i = 0; i < fieldSize; i++) {
    let card = document.createElement("button");
    card.textContent = " ｡･:*:･ﾟ☆";

    card.className = `card ${i}`;
    // console.log(card.className);
    cardForm.append(card);

    // card.classList.add(`card ${i}`);
    // console.log(card.classList);
    // cardForm.append(card);

    card.addEventListener("click", (event) => {
      event.preventDefault();
      card.disabled = true;
      card.textContent = arrayField[i];
      arrayCompare.push(card);
      compareCards(fieldSize);
    });
  }
}
console.log(arrayCompare);

function compareCards(fieldSize) {
  setInterval(() => {
    if (arrayCompare.length == 2) {
      if (arrayCompare[0].textContent == arrayCompare[1].textContent) {
        for (let i = 0; i < 2; i++) {
          arrayRight.push(arrayCompare[i]);
        }

        if (arrayRight.length == fieldSize) {
          alert("Вы победили!");
        }
      } else {
        console.log("false");
        for (let i = 0; i < arrayCompare.length; i++) {
          arrayCompare[i].removeAttribute("disabled");
          arrayCompare[i].textContent = " ｡･:*:･ﾟ☆";
        }
      }
      arrayCompare = [];
    }
  }, 1500);
}
