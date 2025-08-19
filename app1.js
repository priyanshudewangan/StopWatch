const startBtn = document.querySelector('.startBtn')
const stopBtn = document.querySelector('.stopBtn')
const resetBtn = document.querySelector('.resetBtn')

const timerDisplay = document.querySelector('.timerDisplay');
//setting TimerInterval to null
let timerId = null;

startBtn.addEventListener('click', function(){

    //Now for stop making timer faster when start is clicked multiple times
    if(timerId !== null){
        clearInterval(timerId);
    }

    timerId = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
})

let millSec = 0;
let mins = 0;
let secs = 0;

function startTimer(){
    millSec++;
    if(millSec == 100){
        millSec = 0;
        secs++;
        
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    //Everything is good now we need to add 0 for seconds less than 10
    let millisecStr = millSec < 10 ? `0${millSec}` : millSec;
    let secStr = secs < 10 ? `0${secs}` : secs;
    let minStr = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minStr} : ${secStr} : ${millisecStr}`;
}