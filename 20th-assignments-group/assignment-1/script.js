let setOfNumbers = new Set([10]); // Here the argument must be iterable like array,string...
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size-1]);

// Needed Output
// Set(3) {10, 20, 2}
// 2