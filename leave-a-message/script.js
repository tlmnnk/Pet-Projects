//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {
    let input  = document.querySelector('.promo__input');
    let message = document.querySelector('.promo__message')
    const button = document.querySelector('.promo__send');


    button.addEventListener('click', function() {
      message.innerHTML = input.value;
      input.value = '';
    });
   
});

