//jshint esversion: 6

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let index = 0;

prev.addEventListener('click', prevSlide);


next.addEventListener('click', nextSlide);

function nextSlide() {
    index++;
    if(index === totalSlides) {index = 0;}

    for(let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function prevSlide() {
    
    if(index === 0) {index = totalSlides;}
    index--;
    for(let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}