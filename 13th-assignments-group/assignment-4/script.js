let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invertedNumbers = numsAndStrings.filter(function(element) {
    return !isNaN(element);
}).map(function(element) {
    return -element;
})
console.log(invertedNumbers)
// [-1, -10, 10, 20, -5, -3]