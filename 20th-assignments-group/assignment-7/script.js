let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne,...numsTwo]);

console.log(Array.from(new Set(numsOne).add(numsTwo[0]).add(numsTwo[1]).add(numsTwo[2])));

numsOne.push(...numsTwo);

console.log(numsOne);


// Needed Output
// [1, 2, 3, 4, 5, 6]