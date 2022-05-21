let timeEl = document.querySelector('#time-el')
let startEl = document.querySelector('#start-el')
let modal = document.querySelector('.modal')
let modalContainer = document.querySelector('.modal-container')
let homeContainer = document.querySelector('.home-container')
let modalTimeEl = document.querySelector('#modal-time-el')

let startingMinutes = 30;
let time = startingMinutes * 60;

function firstCountDown() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeEl.textContent = `${minutes} : ${seconds}`;
    modalTimeEl.textContent = `${minutes} : ${seconds}`;

    time--;
    if(time == -2) {
        secondCountDown()
    }
}

function secondCountDown() {
    modalContainer.classList.add('show')
    homeContainer.classList.add('shadow')
    
    startingMinutes = 2;
    time = startingMinutes * 60;

    firstCountDown()
}

startEl.addEventListener('click', function() {
    firstCountDown()
    setInterval(firstCountDown, 1000)
})