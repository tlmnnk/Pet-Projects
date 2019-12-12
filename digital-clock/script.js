//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {

    const container = document.querySelector('.container');

    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    zeroSecondsCheck();
   

    function zeroSecondsCheck() {
        if(seconds < 10) {
            container.innerHTML = hour + ':' + minutes +':0' + seconds;}
        else {
            container.innerHTML = hour + ':' + minutes +':' + seconds;}
        }

    setInterval(() => {
        seconds++;
        zeroSecondsCheck();

        if(seconds > 59) {
            seconds = 0;
            minutes++;
        }
        if(minutes > 59) {
            minutes = 0;
            hour++;
        }
        if(hour > 23) {
            hour = 0;
        }
        zeroSecondsCheck();
        
    }, 1000);
});