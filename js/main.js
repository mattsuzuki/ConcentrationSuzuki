/*----- constants -----*/
const cards = document.querySelectorAll('.concentrate-card');
const plays = document.querySelector('.play-reset');
const starts = document.querySelectorAll('.play-reset');
const playcards = [
    1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,"j","j","q","q"
    
    ];

/*----- app's state (variables) -----*/

let pTurnedCard = false;
let firstCard, secondTurn;


/*----- cached element references -----*/




/*----- event listeners -----*/
cards.forEach(card => card.addEventListener('click', turnCard));
starts.forEach(start => start.addEventListener('click', startGame));




/*----- functions -----*/

function startGame () {
console.log('click');
console.log(this);
}


function turnCard(){
    this.classList.toggle('turn');
    console.log('turned');
    console.log(this);

};


