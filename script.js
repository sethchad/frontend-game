
// Event listeners and fuctions for 
let gameButton = document.querySelectorAll('.gameButton')

// Dims button on mouse down
gameButton.forEach(gameButton => gameButton.addEventListener('mousedown', function(e) {
    e.target.style.opacity = "0.5"}));

// Returns button to full color on mouseup
gameButton.forEach(gameButton => gameButton.addEventListener('mouseup', function(e) {
    e.target.style.opacity = "1"}));

// Game Play
gameButton.forEach(gameButton => gameButton.addEventListener('click', clickHandler))

function clickHandler(e) {
    e.preventDefault();
    console.log(Number(e.target.dataset.value));

    
}


// New Game button
document.querySelector('button').addEventListener('click', newGameHandler)

function newGameHandler(e) {
    e.preventDefault();
    console.log(e);

    let gameSequence = [];

    for (i = 0; i < 10; i++) {
        random = Math.floor(Math.random() * Math.floor(4));
        gameSequence.push(random);
    }

    console.log(gameSequence)
}