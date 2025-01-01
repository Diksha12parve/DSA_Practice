const arr = [2,4,0,9,6,2,3];

let min = arr[0];
let max = arr[0];

 for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i]< min){
        min = arr[i];
    }
 }
 console.log('maximum value',max);
 console.log('minimum value', min);