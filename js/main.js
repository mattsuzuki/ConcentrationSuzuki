/*----- constants -----*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

let playcards = [
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  "j",
  "j",
  "q",
  "q",
];

/*----- app's state (variables) -----*/

// let pTurnedCard = false;
// let firstCard, secondTurn;

/*----- cached element references -----*/
const cards = document.querySelectorAll(".concentrate-card");
const starts = document.querySelectorAll(".play-reset");
const gameboard = document.querySelector(".concentrate-game-board");

/*----- event listeners -----*/
cards.forEach((card) => card.addEventListener("click", turnCard));
starts.forEach((start) => start.addEventListener("click", startGame));


/*----- functions -----*/

function startGame() {
  shuffle(playcards);
}
console.log(shuffle(cards));

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function turnCard() {
  this.classList.toggle("turn");
  console.log("turned");
  console.log(this);
}

function render() {
  gameboard;
}
// let shuffledArray = shuffle(playcards);
// let card1 = shuffledArray[1];



let cardEls = document.querySelectorAll(".front-face");

cardEls.forEach((card ) => {
    let randomNum = getRandomInt(10);
    let url = `./imgs/fronts/clubs_${randomNum}.svg`;
    card.setAttribute("src", url);
});


// REDO LOGIC!!!!

