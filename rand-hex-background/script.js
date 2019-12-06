//jshint esversion: 6

document.addEventListener("DOMContentLoaded", function() {

    const hexEl = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const hexColor = document.getElementById('hex');
    const button = document.getElementById('btn');
    const body = document.querySelector('body');
    let random = getRandom(hexEl.length);
    
    changeColor();

    button.addEventListener('click', changeColor);
    


function getRandom(arrLength) {
    const rand = Math.floor(Math.random()*arrLength);
    return rand;
}

function getColor() {
    let hexStr = '#';
    for(let i = 0; i < 6; i++){
    hexStr += hexEl[getRandom(hexEl.length)];}
    return hexStr;
}

 function changeColor() {
    const newColor = getColor();
    hexColor.innerHTML = newColor;
    body.style.backgroundColor = newColor;
    button.style.color = getColor();
 }
  });

    
    