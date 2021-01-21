
// New Game button
document.querySelector('button').addEventListener('click', newGameHandler)

let gameSequence = [];
let playerSequence = [];
let round = 0;

function newGameHandler(e) {
    e.preventDefault();

    let gameButton = document.querySelectorAll('.gameButton')

    // Dims button on mouse down
    gameButton.forEach(gameButton => gameButton.addEventListener('mousedown', function(e) {
        e.target.style.opacity = "0.5"}));
    
    // Returns button to full color on mouseup
    gameButton.forEach(gameButton => gameButton.addEventListener('mouseup', function(e) {
        e.target.style.opacity = "1"}));

    // Game Play Listeners
    gameButton.forEach(gameButton => gameButton.addEventListener('click', clickHandler))

    // Resets variables
    round = 0;
    gameSequence = [];
    playerSequence = [];
    document.querySelector('.outcome').innerText = "Score: ";

    // Generates game sequence
    for (i = 0; i < 10; i++) {
        random = Math.floor(Math.random() * Math.floor(4));
        gameSequence.push(random);
    }

    console.log(gameSequence)

    let green = document.querySelector('[data-value = "0"]')
    let red = document.querySelector('[data-value = "1"]')
    let yellow = document.querySelector('[data-value = "2"]')
    let blue = document.querySelector('[data-value = "3"]')


    setTimeout(() => {
        green.style.opacity = "0.5";
        setTimeout(() => {
            green.style.opacity = "1";
        }, 1*1000);
    }, 1*1000);

}


function clickHandler(e) {
    e.preventDefault();

    if (round < 10) 
    {
        playerSequence.push(Number(e.target.dataset.value))

        for(i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] != gameSequence[i]) {
                document.querySelector('.outcome').innerText = "wrong, game over";
            } 
        }
    }
    else
    {
        console.log("game over")
    }

    console.log("player sequence", playerSequence)
    
}
