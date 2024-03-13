let theNumber = 100020003000;
let number = +[...(theNumber.toString())].filter((element) => element > 0).join("");
console.log(number);
// Needed Output
123