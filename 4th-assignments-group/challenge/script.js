let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(parseInt(Math.min(a,b,c,d)));
console.log(Math.pow(10,parseInt(d))*a); // 10000
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Number(Math.round((Math.floor(b) / Math.ceil(d)).toFixed(2)))); // 67 => Number 