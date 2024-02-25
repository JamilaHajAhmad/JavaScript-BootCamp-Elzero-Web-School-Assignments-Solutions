let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let onlyLetters = mix.map(function(element) {
    return isNaN(element) ? element : '';
}).reduce(function(accumulator,current) {
    return `${accumulator}${current}`;
});
console.log(onlyLetters);