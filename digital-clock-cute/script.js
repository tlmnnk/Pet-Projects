
    const hoursEl = document.querySelector('.hour');
    const minutesEl = document.querySelector('.minutes');
    const secondsEl = document.querySelector('.seconds');

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
    
        hoursEl.innerHTML = hour;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = seconds;
    }
    showTime();


    setInterval(() => {
        showTime();
    }, 1000);