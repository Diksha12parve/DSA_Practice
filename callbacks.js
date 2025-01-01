// A function in Javascript  which is passed as an argument to another function

function createMessage(name, callback) {
    setTimeout(() => {
        const message =  `Hello ${name}`;
        callback(message);
    }, 1000);
    
}

function displayMessage(message){
    console.log(message);

}

createMessage('Diksha', displayMessage);
 

