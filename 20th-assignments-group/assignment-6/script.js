// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbers = chars.filter((element) => !isNaN(element));
chars = chars.filter((element) => isNaN(element));
chars.unshift(...numbers);
chars.copyWithin(0,numbers.length,numbers.length*2);
console.log(chars)

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]