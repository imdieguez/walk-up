let timeEl = document.querySelector('#time-el')
let startButton = document.querySelector('#start-el')
let modal = document.querySelector('.modal')
let modalContainer = document.querySelector('.modal-container')
let homeContainer = document.querySelector('.home-container')
let modalTimeEl = document.querySelector('#modal-time-el')
let startAgainButton = document.querySelector('.start-again-el')

let startingMinutes = 10;
let time = startingMinutes * 1;

function start() {
    startingMinutes = 20;
    time = startingMinutes * 1;
}

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
    
    startingMinutes = 1;
    time = startingMinutes * 4;

    setTimeout(() => {
        startAgainButton.classList.add('show')
    },4000)
    firstCountDown()
    startAgainButton.addEventListener('click', function() {
        start()
        
        let minutes = Math.floor(time/60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        timeEl.textContent = `${minutes} : ${seconds}`;
        modalTimeEl.textContent = `${minutes} : ${seconds}`;

        time--;
        modalContainer.classList.remove('show')
        homeContainer.classList.remove('shadow')
    })
}
    startButton.addEventListener('click', function() {
    firstCountDown()
    startButton.classList.add('hidden')
    setInterval(firstCountDown, 1000)
}, {once: true})

