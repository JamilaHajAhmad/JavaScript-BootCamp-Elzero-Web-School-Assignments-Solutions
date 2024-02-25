let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let newArray = myArray.reduce(function(accumulator,current) {
    return accumulator+current;
}).split("").filter(function(element,index,myArray) {
    return myArray[index] != ',';
}).reduce(function(accumulator,current) {
    return accumulator+current;
})
console.log(newArray)