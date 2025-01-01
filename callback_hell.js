function firstFunction(val, callback){
  setTimeout(() => {
    const result =  val + 1;
    callback(result)
  },1000)
}

function secFunction(val, callback){
    const result1= val + 2;
    callback(result1)
}

function thirdFunction(val, callback){
    const result2 = val +3;
    callback(result2);
}

// function doOperation(){
//     let result =0;
//     result = firstFunction(result);
//     result = secFunction(result);
//     result = thirdFunction(result);

//     console.log(`result ${result}`);
// }

// pyramid of doom  or cllback hell
function doOperation(){
    firstFunction(0, (result) => {
        secFunction(result, (result1)=>{
            thirdFunction(result1, (result2) => {
                console.log(`result ${result2}`)
            })
        })
    })
}

doOperation();
