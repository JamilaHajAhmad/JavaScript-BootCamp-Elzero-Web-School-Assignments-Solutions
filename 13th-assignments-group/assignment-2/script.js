let myString = "EElllzzzzzzzeroo";
myString = myString.split("");
// Elzero

let newString = myString.filter(function(element,index,myString) {
    return myString[index] != myString[index+1];
    
}).reduce(function(accumulator,current) {
    return `${accumulator}${current}`;
})
console.log(newString);

