
// Page Load Events
let gameSequence = [];
let playerSequence = [];
let round = 0;
let roundStr = "";

// New Game listener and 
document.querySelector('button').addEventListener('click', newGameHandler)

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
    document.querySelector('.outcome').innerText = "Round 1";

    // Generates game sequence
    for (i = 0; i < 10; i++) {
        random = Math.floor(Math.random() * Math.floor(4));
        gameSequence.push(random);
    }

    console.log(gameSequence)

    // Blinks all four buttons at once at start of game 

    let green = document.querySelector('[data-value = "0"]')
    let red = document.querySelector('[data-value = "1"]')
    let yellow = document.querySelector('[data-value = "2"]')
    let blue = document.querySelector('[data-value = "3"]')

    green.style.opacity = "0.5";
    red.style.opacity = "0.5";
    yellow.style.opacity = "0.5";
    blue.style.opacity = "0.5";

    setTimeout(() => {
        green.style.opacity = "1";
        red.style.opacity = "1";
        yellow.style.opacity = "1";
        blue.style.opacity = "1";
    }, 0.5*1000);

    // Blinks first light in the sequence

    setTimeout(() => lightUpSequence(), 1*1000);
}


// Light up buttons to show game sequence

function lightUpSequence() {

    for(i = 0; i < round; i++) 
    {
        //console.log("game sequence", i, "is", gameSequence[i]);

        if (gameSequence[i] == 0) { color = document.querySelector('[data-value = "0"]'); }
        else if (gameSequence[i] == 1) { color = document.querySelector('[data-value = "1"]'); }
        else if (gameSequence[i] == 2) { color = document.querySelector('[data-value = "2"]'); }
        else { color = document.querySelector('[data-value = "3"]');}

        blink(color, i);
    } 
}

// Blinks lights 

function blink(color, i) {
    setTimeout(() => {color.style.opacity = "0.5"}, (i+0.5)*1000);
    setTimeout(() => {color.style.opacity = "1"}, (i+1)*1000);
}

// Function handles button clicks during game play

function clickHandler(e) {
    e.preventDefault();

    if (round < 11) 
    {
        playerSequence.push(Number(e.target.dataset.value))

        console.log("player sequence", playerSequence);
        console.log("round", round)

        for(i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] != gameSequence[i]) {
                document.querySelector('.outcome').innerText = "Wrong, Game Over.";
            } 
        }

        // if (playerSequence[round - 1] != gameSequence[round - 1]) {
        //     document.querySelector('.outcome').innerText = "Wrong, Game Over.";
        // }

        //console.log("player sequence:", playerSequence);

        if (playerSequence.length < round) { 
            console.log("player sequence length", playerSequence.length)
            
        } 
        else 
        {
            playerSequence = [];
            round++;
            roundStr = "Round " + round;
            document.querySelector('.outcome').innerText = roundStr;
            console.log("round:", round, "player sequence length:", playerSequence.length)
            
            lightUpSequence();
        }
    }
}
