 
 const num = [1,2,3,4,5];

// // Brute force solution

//  let ans = new Array(num.length).fill(0);

//  for(let i=0; i<num.length; i++){
//     for(let j=0; j<=i; j++){
//         ans[i]= ans[i]+num[j];
//     }
//  }
//  console.log(ans);

const ans = new Array(num.length);

ans[0] = num[0];

for(let i= 1; i<num.length; i++){
    ans[i] = ans[i-1]+num[i];
}
console.log(ans);

 