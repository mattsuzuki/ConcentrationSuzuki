/*----- constants -----*/
const cards = document.querySelectorAll('.concentrate-card');
const plays = document.querySelector('.play-reset');


/*----- app's state (variables) -----*/

let pTurnedCard = false;
let firstCard, secondTurn;


/*----- cached element references -----*/




/*----- event listeners -----*/
cards.forEach(card => card.addEventListener('click', turnCard));




/*----- functions -----*/

function turnCard(){
    this.classList.toggle('turn');
    console.log('turned');
    console.log(this);

};



