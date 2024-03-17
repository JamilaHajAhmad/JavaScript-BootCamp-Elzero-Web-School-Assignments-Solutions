let phone = "+(995)-123 (4567)";

let regExp = /\W\(\d{3}\)\W\d{3}\s\(\d{4}\)/;

console.log(regExp.test(phone));