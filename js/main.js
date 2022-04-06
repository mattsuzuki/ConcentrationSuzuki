/*----- constants -----*/
// Each of the "card" objects will be used twice,
// then shuffled and used for the board's cards
var SOURCE_CARDS = [
  { img: "https://i.imgur.com/ZXPKaiN.jpg", matched: false },
  { img: "https://i.imgur.com/XMEsZBX.jpg", matched: false },
  { img: "https://i.imgur.com/6jX1bMT.jpg", matched: false },
  { img: "https://i.imgur.com/yKdqsBv.jpg", matched: false },
  { img: "https://i.imgur.com/1BV3HLr.jpg", matched: false },
  { img: "https://i.imgur.com/QYmN6Hp.jpg", matched: false },
  { img: "https://i.imgur.com/D5pWE05.jpg", matched: false },
  { img: "https://i.imgur.com/Ss4Xo3x.jpg", matched: false },
  { img: "https://i.imgur.com/1BV3HLr.jpg", matched: false },
  { img: "https://i.imgur.com/QYmN6Hp.jpg", matched: false },
  { img: "https://i.imgur.com/D5pWE05.jpg", matched: false },
  { img: "https://i.imgur.com/Ss4Xo3x.jpg", matched: false },
];
const CARD_BACK = "imgs/backs/backcard.png";

/*----- app's state (variables) -----*/
let cards; // Array of 16 shuffled card objects
let firstCard; // First card clicked (card object) or null
let numBad;
let ignoreClicks;

/*----- cached element references -----*/
const msgEl = document.querySelector("h3");

/*----- event listeners -----*/
document.querySelector("main").addEventListener("click", handleChoice);

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  cards = getShuffledCards();
  firstCard = null;
  numBad = 0;
  ignoreClicks = false;
  render();
}

function render() {
  cards.forEach(function (card, idx) {
    const imgEl = document.getElementById(idx);
    const src = card.matched || card === firstCard ? card.img : CARD_BACK;
    imgEl.src = src;
  });
  msgEl.innerHTML = `Bad Count: ${numBad}`;
}

function getShuffledCards() {
  let tempCards = [];
  let cards = [];
  for (let card of SOURCE_CARDS) {
    tempCards.push({ ...card }, { ...card });
  }
  while (tempCards.length) {
    let rndIdx = Math.floor(Math.random() * tempCards.length);
    let card = tempCards.splice(rndIdx, 1)[0];
    cards.push(card);
  }
  return cards;
}

// Update all impacted state, then call render()
function handleChoice(evt) {
  const cardIdx = parseInt(evt.target.id);
  if (isNaN(cardIdx) || ignoreClicks) return;
  const card = cards[cardIdx];
  if (firstCard) {
    if (firstCard.img === card.img) {
      // correct match
      firstCard.matched = card.matched = true;
    } else {
      numBad++;
    }
    firstCard = null;
  } else {
    firstCard = card;
  }
  render();
}
