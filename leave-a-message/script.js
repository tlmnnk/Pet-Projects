//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {
    let input  = document.querySelector('.promo__input');
    let message = document.querySelector('.promo__message');
    const button = document.querySelector('.promo__send');
    message.innerHTML = localStorage.getItem('lastMessage');


    button.addEventListener('click', function() {
      message.innerHTML = input.value;
      localStorage.setItem('lastMessage', input.value);
      input.value = '';
    });
   
});

