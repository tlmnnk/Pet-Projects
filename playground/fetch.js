//jshint esversion: 9

async function getToDo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await res.json();
    }

    $.ajax('https://jsonplaceholder.typicode.com/todos');