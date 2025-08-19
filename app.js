let timerDisplay = document.querySelector('.timerDisplay');

//getting buttons
let stopBtn = document.querySelector('.stopBtn');
let startBtn = document.querySelector('.startBtn');
let resetBtn = document.querySelector('.resetBtn');



let timerId = null;

startBtn.addEventListener('click', function() {

    if(timerId != null){
        clearInterval(timerId);
    }

    timerId = setInterval(startTimer, 10);
});


stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
})

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
})

let millisec = 0;
let mins = 0;
let seconds = 0;

function startTimer(){
    millisec++;
    if(millisec == 100){
        millisec = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            mins++;
        }
    }

    let millisecString = millisec < 10 ? `0${millisec}` : millisec;
    let secsString = seconds < 10 ? `0${seconds}` : seconds;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${millisecString}` ;
}