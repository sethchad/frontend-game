
// New Game button
document.querySelector('button').addEventListener('click', newGameHandler)

let gameSequence = [];
let playerSequence = [];
let round = 0;
let roundStr = "";

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
    round = 1;
    gameSequence = [];
    playerSequence = [];
    roundStr = "Round " + round;
    document.querySelector('.outcome').innerText = roundStr;

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

    // Light up buttons to show game sequence

    for(i = 0; i < round; i++) 
    {
        console.log("game sequence", i, "is", gameSequence[i]);

        if (gameSequence[i] == 0) { color = document.querySelector('[data-value = "0"]'); }
        else if (gameSequence[i] == 1) { color = document.querySelector('[data-value = "1"]'); }
        else if (gameSequence[i] == 2) { color = document.querySelector('[data-value = "2"]'); }
        else { color = document.querySelector('[data-value = "3"]');}

       console.log("color", color)

        setTimeout(() => {
            color.style.opacity = "0.5";
            setTimeout(() => {
                color.style.opacity = "1";
            }, 0.5*1000);
        }, 0.5*1000);
    } 

}

// Function handles button clicks during game play

function clickHandler(e) {
    e.preventDefault();

    if (round < 10) 
    {
        playerSequence.push(Number(e.target.dataset.value))

        for(i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] != gameSequence[i]) {
                document.querySelector('.outcome').innerText = "Wrong, Game Over.";
            } 
        }
    }
    // else
    // {
    //     console.log("game over")
    // }

    console.log("player sequence", playerSequence)
    
}
