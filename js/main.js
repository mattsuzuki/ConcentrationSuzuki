/*----- constants -----*/

var SOURCE_CARDS = [
  { img: "imgs/fronts/clubs_2.svg", matched: false },
  { img: "imgs/fronts/clubs_3.svg", matched: false },
  { img: "imgs/fronts/clubs_4.svg", matched: false },
  { img: "imgs/fronts/clubs_5.svg", matched: false },
  { img: "imgs/fronts/clubs_6.svg", matched: false },
  { img: "imgs/fronts/clubs_7.svg", matched: false },
  { img: "imgs/fronts/clubs_8.svg", matched: false },
  { img: "imgs/fronts/clubs_9.svg", matched: false },
  { img: "imgs/fronts/clubs_10.svg", matched: false },
  { img: "imgs/fronts/clubs_jack.svg", matched: false },
  { img: "imgs/fronts/clubs_queen.svg", matched: false },
  { img: "imgs/fronts/clubs_king.svg", matched: false },
];
const CARD_BACK = "imgs/backs/backcard.png";

/*----- app's state (variables) -----*/
let cards; // Array of  shuffled card objects
let firstCard; // First card clicked (card object) or null
let numBad;
let score;
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
  score = 0;
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
  if(firstCard && firstCard === card){
    firstCard = null;
  }
  else if (firstCard) {
    if (firstCard.img === card.img) {
      // correct match
      firstCard.matched = card.matched = true;
      firstCard = null; 
      score++;
    } else { 
      ignoreClicks = true; 
      card.matched = true;
      score++;
      numBad++;
      setTimeout(function () {
        ignoreClicks = false;
        firstCard = null;
        card.matched = false;
        render();
      }, 1000);
    }
  
  } else {
    firstCard = card;
  }

  render();
}
