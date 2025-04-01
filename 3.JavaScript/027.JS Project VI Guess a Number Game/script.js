let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid Number");
    } else if (guess < 1) {
        alert("Enter Number greater than 0");
    } else if (guess > 100) {
        alert("Enter Number lesser than or equal to 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You Guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too Low");
    } else if (guess > randomNumber) {
        displayMessage("Number is too High");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<button>${message}</button>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    p.style.backgroundColor = "#4CAF50";  
    p.style.color = "white";
    p.style.padding = "10px 20px";
    p.style.border = "none";
    p.style.borderRadius = "5px";
    p.style.cursor = "pointer";
    p.style.textAlign = "center";
    p.style.display = "inline-block";
    p.style.fontSize = "16px";
    p.style.marginTop = "20px";

    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
