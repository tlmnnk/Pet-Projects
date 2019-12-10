//jshint esversion: 6

document.addEventListener('DOMContentLoaded', function() {
    let input  = document.querySelector('.promo__input');
    let message = document.querySelector('.promo__message');
    const buttonSend = document.querySelector('.send');
    const buttonErase = document.querySelector('.erase');
    message.innerHTML = localStorage.getItem('lastMessage');


    buttonSend.addEventListener('click', function() {

      if(input.value === '') {
        alert('Please, do not leave empty message')
      } else {
        message.innerHTML = input.value;
        localStorage.setItem('lastMessage', input.value);
        input.value = '';
      }
    });

    buttonErase.addEventListener('click', function() {
      setTimeout(emptyMessage, 3000);
    });

    function emptyMessage() {
      message.innerHTML = '';
    }
   
});

