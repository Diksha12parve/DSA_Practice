
function getsum(arr, key){
    const transArr = arr.map(num=>2*num)
    const filterArr = transArr.filter(num => num>key)
    return filterArr.reduce((acc,cur) => acc+cur,0)}

console.log(getsum([1,2,3,4,5],8));