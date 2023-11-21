// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const wrapperElement = document.querySelector('div.wrapper');


const writePlayerNum = document.createElement ('p');
writePlayerNum.className = 'first-two-p'

let playerNumber;
const playerBtnElement = document.querySelector ('button#num-player');
playerBtnElement.addEventListener ('click', function () {
    playerNumber = Math.round ((Math.random()*5) +1);
    writePlayerNum.innerHTML = `Il numero generato dal player è: ${playerNumber}`;
    wrapperElement.appendChild(writePlayerNum);
})



const writeComputerNum = document.createElement ('p');
writeComputerNum.className = 'first-two-p'

let computerNumber;
const computerBtnElement = document.querySelector ('button#num-computer');
computerBtnElement.addEventListener ('click', function () {
    computerNumber = Math.round ((Math.random()*5) +1);
    writeComputerNum.innerHTML = `Il numero generato dal computer è: ${computerNumber}`;
    wrapperElement.appendChild(writeComputerNum);
})


const writeWinner = document.createElement ('p');

const winnerBtnElement = document.querySelector ('button#winner');
winnerBtnElement.addEventListener ('click', function () {
    wrapperElement.appendChild(writeWinner);
    if (playerNumber > computerNumber) {
        writeWinner.innerHTML = 'Il vincitore è il player';
    } else if (playerNumber < computerNumber) {
        writeWinner.innerHTML = 'Il vincitore è il computer';
    }
})