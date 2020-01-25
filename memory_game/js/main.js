const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
 // there are two cards in cardsInPlay
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log(cardsInPlay.length);


