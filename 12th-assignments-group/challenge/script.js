let names = (...arrayOfNames) => `String [${arrayOfNames.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => Number(nums) + two + one; 

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80

function calc(one,two,...nums) {
    return Number(nums) + two + one; 
}

// You can use pop() method 
