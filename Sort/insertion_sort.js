const arr = [9, 2, 3, 17, 23, 10];

let n = arr.length;

function insertionSort(arr, n){

    let key, j;

    for(let i=1; i<n; i++){
        key = arr[i];
        j = i-1;
        
        while(j >=0 && arr[j] > key){
            arr[j+1] = arr[j];  // arr[1] = 19[19, 19, 3, 17,23, 10]
            j--;
        }
        arr[j+1] = key;  //arr[0] = 2 = [2, 19, 3, 17, 23, 10]
    }

    return arr;
}

const resultArray = insertionSort(arr, n);
console.log("Result Array", resultArray);

// Time Complexity O(n2)
// Space Complexity O(1)