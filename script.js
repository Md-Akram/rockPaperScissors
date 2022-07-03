let SCORE = 0;

const resultField = document.getElementById('result')
const scoreField = document.getElementById('score')
const modal = document.getElementById("myModal");

scoreField.textContent = SCORE;

const pickUserButton = (hand) => {

    const playButtons = document.querySelector('.play-buttons')
    playButtons.style.display = "none"

    const contest = document.querySelector('.contest')
    contest.style.display = 'grid'

    const userPicked = document.querySelector('.user')
    userPicked.innerHTML = `
    <p>
          you picked
        </p>
        <div class="${hand}-button button">
          <div class="${hand} btn">
            <img id src="images/icon-${hand}.svg" alt="${hand}">
          </div>
        </div>
    `
    let computerHand = computerPicked()

    result(hand, computerHand)
}

const computerPicked = () => {
    let options = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * options.length)
    let computerChoice = options[randomNum]

    const computerPick = document.querySelector('.house')
    computerPick.innerHTML = `
    <p>
          house picked
        </p>
        <div class="${computerChoice}-button button">
          <div class="${computerChoice} btn">
            <img id src="images/icon-${computerChoice}.svg" alt="${computerChoice}">
          </div>
        </div>
    `

    return computerChoice
}

const result = (hand, computerHand) => {
    if (hand === computerHand) {
        draw()
    } else if (
        (hand === 'rock' && computerHand === 'scissors') || (hand === 'scissors' && computerHand === 'paper') || (hand === 'paper' && computerHand === 'rock')
    ) {
        won()
    } else {
        lose()
    }
}

const draw = () => {
    resultField.textContent = `It's s tie`


}

const won = () => {
    resultField.textContent = 'You Won'
    SCORE++;
    scoreField.textContent = SCORE;
}

const lose = () => {
    resultField.textContent = 'You Lose'
    SCORE--;
    scoreField.textContent = SCORE;
}

const playAgain = () => {
    const playButtons = document.querySelector('.play-buttons')
    playButtons.style.display = "grid"

    const contest = document.querySelector('.contest')
    contest.style.display = 'none'
}

const modalOpener = () => {
    modal.style.display = "block";
}

const modalCloser = () => {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}