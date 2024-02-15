let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseFloat(flt) - parseInt(flt) + (parseInt(flt) - (parseFloat(flt) - parseInt(flt)))); // 10