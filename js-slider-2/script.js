//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function(){
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    let index = 1;


    function changeSlide(direction) {

        slider.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration:500, fill:'forwards'});

        if(direction === 'prev') {
            index++; 
            if(index === 6) {index = 1;} 

        } else if(direction === 'next') {
            index++; 
            if(index === 6) {index = 1;}  
        }
        slider.style.backgroundImage = `url('img/cat${index}.jpg')`;
    }
    
    next.addEventListener('click', function() { 
        changeSlide('next');
    });

    prev.addEventListener('click', function() { 
        changeSlide('prev');
    });
});
