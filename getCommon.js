// function getCommon(arr1, arr2){
//     return arr1.filter(itr=>arr2.includes(itr))
// }

// console.log(getCommon([1,2,3,4,5],[4,5,6,7,8]))


let num1 = [1,2,[3,4],[[5,6]]];
let num2 = num1.flat(Infinity);
console.log(num2);