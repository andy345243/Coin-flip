// COIN FLIP SIMULATOR

//HTML variables
let outputEl = document.getElementById("output");
let diceOne = document.getElementById("dice1");
let diceTwo = document.getElementById("dice2");
let diceThree = document.getElementById("dice3");
let diceFour = document.getElementById("dice4");
let diceFive = document.getElementById("dice5");
let diceSix = document.getElementById("dice6");
let outputTwo = document.getElementById("output2");

//Count Variables
//let numHeads = 0;
//let numTails = 0;

//let rand = Math.random();
//console.log(rand);

// 10% heads 60% feet 30% tails
//if (rand < 0.1) {
//  console.log("Heads");
//} else if (rand < 0.7) {
//  console.log("Feet");
//} else {
// console.log("Tails");
//}

// Button Event Listener
//document.getElementById("btn").addEventListener("click", btnClicked);

//function btnClicked() {
// Generate a random number
//let randNum = Math.random();
//console.log(randNum);

// Simulate the coin flip
//if (randNum < 0.5) {
//outputEl.innerHTML = "<img src='img/heads.png' />";
// numHeads = numHeads + 1;
// headsEl.innerHTML = numHeads;
//} else {
//  outputEl.innerHTML = "<img src = 'img/tails.png' />";
//  numTails = numTails + 1;
//  tailsEl.innerHTML = numTails;
// }
//}

// EVENT LISTENER DICE

document.getElementById("btn").addEventListener("click", dice);
//count Variables
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;

//calculation
//simulate dice flip
function dice() {
  let randNum = Math.random();

  //dice #1
  if (randNum < 0.166666666667) {
    outputEl.innerHTML = "<img src='img/1.png' />";
    dice1 = dice1 + 1;
    diceOne.innerHTML = dice1;
  } else if (randNum < 0.333333333334) {
    outputEl.innerHTML = "<img src ='img/2.png' />";
    dice2 = dice2 + 1;
    diceTwo.innerHTML = dice2;
  } else if (randNum < 0.500000000001) {
    outputEl.innerHTML = "<img src = 'img/3.png' />";
    dice3 = dice3 + 1;
    diceThree.innerHTML = dice3;
  } else if (randNum < 0.666666666668) {
    outputEl.innerHTML = "<img src = 'img/4.png' />";
    dice4 = dice4 + 1;
    diceFour.innerHTML = dice4;
  } else if (randNum < 0.83333333333) {
    outputEl.innerHTML = "<img src = 'img/5.png' />";
    dice5 = dice5 + 1;
    diceFive.innerHTML = dice5;
  } else if (randNum < 1) {
    outputEl.innerHTML = "<img src = 'img/6.png' />";
    dice6 = dice6 + 1;
    diceSix.innerHTML = dice6;
  }
}
