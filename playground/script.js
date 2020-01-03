//jshint esversion: 6

// const p = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         console.log('Preparing data....');
        
//         setTimeout(() => {
//             console.log('Sending data...');
//             const someObj = {
//                 name: 'someData',
//                 type: 'text'
//             };
//             resolve(someObj);        
//         }, 2000);


//     },2000);
// });

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.isReceived = true;
//             resolve(data);
//         }, 2000);
//     });
// }).then(clientData => console.log(clientData));


function getData(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    
    xhr.addEventListener('load', () => {
       cb(xhr.responseText);
    });
    
    xhr.send();
    }
    
    
function createPost(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', ()=>{
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        
    xhr.send(JSON.stringify(body));
    }


function myHttpRequest({method, url} = {}, cb) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
        xhr.addEventListener('load', () => {
            if (Math.floor(xhr.status / 100) !== 2) {
                cb('Error. Status code: ' + xhr.status, xhr);
                return;
            }
            const response = JSON.parse(xhr.responseText);
           cb(null, response);
        });
    
        xhr.addEventListener('error', () => {
            cb('Error. Status code: ' + xhr.status, xhr);
        });   
        xhr.send();
    } catch (error) {
        cb(error);
    }
   
}

// myHttpRequest(
//     { 
//         method: 'GET', 
//         url: 'https://jsonplaceholder.typicode.com/posts'
//     }, 
//     (err, res) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(res);
// });


function http() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb('Error. Status code: ' + xhr.status, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                   cb(null, response);
                });
            
                xhr.addEventListener('error', () => {
                    cb('Error. Status code: ' + xhr.status, xhr);
                });   
                xhr.send();
            } catch (error) {
                cb(error);
            }
        },
        post(url, body, headers, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url);

                //;
                if(headers) {
                    Object.entries(headers).forEach(([key, value]) => { 
                        xhr.setRequestHeader(key, value);
                    });
                }
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb('Error. Status code: ' + xhr.status, xhr);
                        return;
                    }
                    const response = JSON.parse(xhr.responseText);
                   cb(null, response);
                });
            
                xhr.addEventListener('error', () => {
                    cb('Error. Status code: ' + xhr.status, xhr);
                });   
                xhr.send(JSON.stringify(body));
            } catch (error) {
                cb(error);
            }
        }
    };
}

const myHttp = http();

myHttp.post(
    'https://jsonplaceholder.typicode.com/posts',
    {name:'John', age: 20},
    {'Content-Type': 'application/json'},
    (err, res) => {
        if(err) {
            console.log(err); return;
        }
        console.log(res);
    } 
);