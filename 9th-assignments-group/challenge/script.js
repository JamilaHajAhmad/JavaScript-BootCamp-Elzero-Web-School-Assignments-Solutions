
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();

console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

my.pop();
my.shift();

console.log(my.slice()); // ["Elham", "Mazero"]

console.log(my[zero].split("h").shift().concat(my.pop().split("a").pop())); // "Elzero"

my.push("Mazero");

let letterR = my.pop().split("a").pop().split("e").pop().split("")[zero];

my.push("Mazero");

console.log(letterR.concat(my.pop().split("a").pop().split("e").pop().split("").pop().toUpperCase())); // "rO"