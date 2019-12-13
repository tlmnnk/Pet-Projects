//jshint esversion: 6


    const clock = document.querySelector('.clock');

    function addZero(time) {
        if(time < 10) {
            time = '0' + time;
        }
        return time;
    }
    
    function showTime() {
        const date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
    
        hour = addZero(hour);
        minutes = addZero(minutes);
        seconds = addZero(seconds);
    
        clock.innerHTML = `${hour}:${minutes}:${seconds}`;
    }
    showTime();


    setInterval(() => {
        showTime();
    }, 1000);