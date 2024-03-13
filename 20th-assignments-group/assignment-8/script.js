let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

let output = +Array.from(new Set([... n1.pop().toString().split(""),... n2.pop().toString().split("")].sort().reverse())).join("")
console.log(output);

// Needed Output
// 210