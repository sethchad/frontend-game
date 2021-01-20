let gameButton = document.querySelectorAll('.gameButton')

gameButton.forEach(gameButton => gameButton.addEventListener('click', clickHandler))

function clickHandler(e) {
    e.preventDefault();
    console.log(Number(e.target.dataset.value));

    e.target.style.opacity = "0.5";
}

document.querySelector('button').addEventListener('click', newGameHandler)

function newGameHandler(e) {
    e.preventDefault();
    console.log(e);
}