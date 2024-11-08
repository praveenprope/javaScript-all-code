const valueInput = document.querySelector('.guess-input');
const submitButton = document.querySelector('.submit-button');
const resultDisplay = document.querySelector('.answers');
const remainingDisplay = document.querySelector('.attempts-left');
const previousGuessesDisplay = document.querySelector('.previous-guesses');

const mainDiv = document.createElement('div');
const restartButton = document.createElement('button');
const previousGuesses = [];
let count = 10;
let randomNum = Math.floor(Math.random() * 50) + 1;

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    
    const guess = parseInt(valueInput.value);
    count--;

    if (count >= 0) {
        remainingDisplay.textContent = `🔄 Guesses remaining: ${count}`;
        checkGuess(guess);
        updatePreviousGuesses(guess);
    } else {
        remainingDisplay.textContent = '❌ No guesses remaining!';
        startNewGame();
    }
});

function checkGuess(guess) {
    if (guess === randomNum) {
        resultDisplay.textContent = "🎉 Congratulations! You guessed the right number!";
        startNewGame();
    } else {
        resultDisplay.textContent = guess < randomNum
            ? "📉 Too low! Try a higher number."
            : "📈 Too high! Try a lower number.";
    }
}

function updatePreviousGuesses(guess) {
    previousGuesses.push(guess);
    previousGuessesDisplay.textContent = `📜 Previous guesses: ${previousGuesses.join(", ")}`;
}

function startNewGame() {
    document.body.appendChild(mainDiv);
    mainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    mainDiv.style.width = '100%';
    mainDiv.style.height = '100vh';
    mainDiv.style.position = 'fixed';
    mainDiv.style.top = '0';
    mainDiv.style.left = '0';
    mainDiv.style.zIndex = '2';
    mainDiv.style.display = 'flex';
    mainDiv.style.justifyContent = 'center';
    mainDiv.style.alignItems = 'center';

    restartButton.textContent = "🔄 Start New Game";
    restartButton.style.padding = '15px 30px';
    restartButton.style.fontSize = '1.2em';
    restartButton.style.color = '#fff';
    restartButton.style.backgroundColor = '#4b6cc1';
    restartButton.style.border = 'none';
    restartButton.style.borderRadius = '8px';
    restartButton.style.cursor = 'pointer';

    mainDiv.appendChild(restartButton);

    restartButton.addEventListener('click', function () {
        resetGame();
    });
}

function resetGame() {
    count = 10;
    randomNum = Math.floor(Math.random() * 50) + 1;
    previousGuesses.length = 0;
    remainingDisplay.textContent = `🔄 Guesses remaining: ${count}`;
    resultDisplay.textContent = "🤔 Make your guess!";
    previousGuessesDisplay.textContent = `📜 Previous guesses: None`;
    valueInput.value = '';

    mainDiv.removeChild(restartButton);
    mainDiv.remove();
}
