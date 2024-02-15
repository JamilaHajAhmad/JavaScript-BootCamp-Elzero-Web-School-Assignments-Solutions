let a = 10;
let b = "20";
let c = 80;
/*
[++a]
- Value: 11
- Explain: pre-increment

[+b++]
- Value: 20
- Explain: post-increment after console.log execution
[+]
- Explain: unary operator

[+c++]
- Value: 80
- Explain: post-increment after console.log execution
[+]
- Explain: unary operator

[+a++]
- Value: 11
- Explain: post-increment after console.log execution
[+]
- Explain: unary operator
*/
console.log(++a + +b++ + +c++ - +a++); // 100
/*
[++a]
- Value: 13
- Explain: pre-increment

[-b]
- Value: -21
- Explain: post-increment after console.log execution
[-]
- Explain: unary negation

[+c++]
- Value: 81
- Explain: post-increment after console.log execution
[+]
- Explain: unary operator

[-a++]
- Value: -13
- Explain: post-increment after console.log execution
[-]
- Explain: unary negation

[+a]
- Value: 14
[+]
- Explain: unary operator

*/
console.log(++a + -b + +c++ - -a++ + +a); // 100
/*
[--c]
- Value: 82 - 1 = 81
- Explain: pre-decrement

[+b]
- Value: 21
[+]
- Explain: unary operator

[--a]
- Value: 14 - 1 = 13
- Explain: pre-decrement

[+b++]
- Value: 21 
[+]
- Explain: unary operator

[+b]
- Value: 22
- Explain: post-increment after console.log execution
[+]
- Explain: unary operator

[--a]
- Value: 13 - 1 = 12
- Explain: pre-decrement

[+true]
- Value: 1 
[+]
- Explain: unary operator

*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * e); // 2000
console.log(-d + (++e * (+(++g)) + ++f)); // 173 