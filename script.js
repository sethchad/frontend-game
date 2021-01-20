let gameButton = document.querySelectorAll('.gameButton')

gameButton.forEach(gameButton => gameButton.addEventListener('click', clickHandler))

function clickHandler(e) {
    e.preventDefault();
    console.log(e);
}

document.querySelector('button').addEventListener('click', newGameHandler)

function newGameHandler(e) {
    e.preventDefault();
    console.log(e);
}