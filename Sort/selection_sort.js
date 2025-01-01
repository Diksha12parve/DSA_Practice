const arr = [78, 67, 56, 62, 70];
let n = arr.length;
let temp;

function seclectinSort(arr, n){
    for(let i=0; i<n; i++){
     
        let min_index = i;
    
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[min_index]){
                min_index = j; 
            }
        }
       
        temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
        
    }
}
seclectinSort(arr, n);
console.log(arr);

// Time Complexity - O(n2)
//Space Complexity - O(1)
