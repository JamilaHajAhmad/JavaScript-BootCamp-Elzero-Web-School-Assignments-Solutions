let theName = "Elzero";
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...theName]);
let array = Array.from(new Set(theName));
console.log(array);
console.log(array.copyWithin());
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']