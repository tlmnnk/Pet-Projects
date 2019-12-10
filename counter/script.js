//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {
    const counter = document.querySelector('.counter');
    const add = document.querySelector('.add');
    const lower = document.querySelector('.lower');
    let counterNumber = 0;

function colorCheck(counter, number) {
    if(number > 0) {
        counter.style.color = 'green';
    } else if (number < 0) {
        counter.style.color = 'red';
    }else {
        counter.style.color = '#fff';
    }
}

function animateEl(element) {
    element.animate([
        // keyframes
        { opacity: '.2' }, 
        { opacity: '1' }
      ], { 
        // timing options
        duration: 1000,
        fill: 'forwards'
      });
}

    add.addEventListener('click', function() {
        counterNumber++;
        colorCheck(counter, counterNumber); 
        counter.innerHTML = counterNumber;
        animateEl(counter);
    });

    lower.addEventListener('click', function() {
        counterNumber--;
        colorCheck(counter, counterNumber);
        counter.innerHTML = counterNumber;
        animateEl(counter);
    });

});