//jshint esversion: 6

const timer = document.querySelector('.timer');
const newYear = new Date("Jan 1, 2020 00:00:00").getTime();

function updateTime() {
    let now = new Date().getTime();
    let milesecondsLeft = newYear - now;

    let days = Math.floor(milesecondsLeft / (1000 * 60 *60 * 24));
    let hours = Math.floor((milesecondsLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((milesecondsLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((milesecondsLeft % (1000 * 60)) / (1000));

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    timer.innerHTML = `${days} day(s) ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`;
}

function addZero(time) {
    if(time < 10) {
        time = '0' + time;
    }
    return time;
}

document.addEventListener('DOMContentLoaded', function(){
    setInterval(()=>{
        updateTime();
    }, 1000);
});




