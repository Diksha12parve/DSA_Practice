const arr = [1, 2, 3, 4, 5];

const evenSum = arr.reduce((acc,curr) => curr % 2 === 0 ? acc+curr: acc, 0);

console.log(evenSum);