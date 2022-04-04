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



/*----- cached element references -----*/
const cards = document.querySelectorAll(".concentrate-card");
const starts = document.querySelector(".play-reset");
const gameboard = document.querySelector(".concentrate-game-board");
const hides = document.querySelector('.concentrate-card');

/*----- event listeners -----*/
cards.forEach((card) => card.addEventListener("click", turnCard));
starts.forEach((start) => start.addEventListener("click", startGame));
hides.forEach((hide) => hide.addEventListener("click", hideGame));


/*----- functions -----*/
function hideGame(){
 let x = document.querySelectorAll(".concentrate-card");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

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

let playTurnedCard = false;
let firstCard, secondTurn;

function selectCard() {
  this.classList.add('select');

  if (!playTurnedCard) {
    playTurnedCard = true;
    firstCard = this;
    console.log({playTurnedCard, firstCard});
  }
cards.forEach(card => card.addEventListener('click', selectCard));

}

function turnCard() {
  this.classList.toggle("turn");
  console.log("turned");
  console.log(this);
}

function render() {
  gameboard;
}


let cardEls = document.querySelectorAll(".front-face");

cardEls.forEach((card ) => {
    let randomNum = getRandomInt(9);
    let url = `./imgs/fronts/clubs_${randomNum}.svg`;
    card.setAttribute("src", url);
});






