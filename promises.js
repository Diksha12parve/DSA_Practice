// asynchronous programming

// producing your result --- promise

// consuming promise

const promise = new Promise(function(resolve, reject){
// some code taking time


let promiseResult ;

setTimeout(()=> {
    promiseResult = false;
    if(promiseResult){
        resolve("Successfully");
    } else{
        reject("Rejected");
    }
},1000)

// let result = 0;

});

// console.log("promise", promise);  panding state

// consuming code

promise.then(result => console.log(result));  // sucssesfull state
promise.catch(err => console.log(err));     // reject state

//three states of promises
// 1. pending
// 2.fulfilled
// 3.Rejected