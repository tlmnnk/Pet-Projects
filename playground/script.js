//jshint esversion: 6

const p = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Preparing data....');
        
        setTimeout(() => {
            console.log('Sending data...');
            const someObj = {
                name: 'someData',
                type: 'text'
            };
            resolve(someObj);        
        }, 2000);


    },2000);
});

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.isReceived = true;
            resolve(data);
        }, 2000);
    });
}).then(clientData => console.log(clientData));
