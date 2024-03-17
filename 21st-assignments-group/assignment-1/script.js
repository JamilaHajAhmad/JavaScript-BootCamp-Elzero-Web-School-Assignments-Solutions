let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regExp = /\d{4}:\w+\d(:\d{4})+/;

console.log(regExp.test(ip));
console.log(ip.match(regExp));