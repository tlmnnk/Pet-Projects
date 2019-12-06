//jshint esversion: 6

const quotes = [
{quote: 'Quote of the Person Number One', author: 'Person Number One'},
{quote: 'Quote of the Person Number Two', author: 'Person Number Two'},
{quote: 'Quote of the Person Number Three', author: 'Person Number Three'},
{quote: 'Quote of the Person Number Four', author: 'Person Number Four'},
{quote: 'Quote of the Person Number Five', author: 'Person Number Five'},
{quote: 'Quote of the Person Number Six', author: 'Person Number Six'},
{quote: 'Quote of the Person Number Seven', author: 'Person Number Seven'},
{quote: 'Quote of the Person Number Eight', author: 'Person Number Eight'},
{quote: 'Quote of the Person Number Nine', author: 'Person Number Nine'},
{quote: 'Quote of the Person Number Ten', author: 'Person Number Ten'},
];

document.addEventListener('DOMContentLoaded', function(){
    
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.quote__author');
    const button = document.querySelector('.btn');

    renderQuote();

    function getRandom(arrLength) {
        const rand = Math.floor(Math.random() * arrLength);
        return rand;
    }

    function getQuote () {
        const random = getRandom(quotes.length);
        const quote = quotes[random].quote;
        const author = quotes[random].author;
        return {
            quote: quote,
            author: author
        };
    }

    function renderQuote() {
        const quoteObj = getQuote();
        quote.innerHTML = quoteObj.quote;
        author.innerHTML = quoteObj.author;
    }

    button.addEventListener('click', renderQuote);
});