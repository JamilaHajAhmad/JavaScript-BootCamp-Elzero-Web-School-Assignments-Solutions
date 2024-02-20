// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//     };
// }
let checker = (zName) => (status) => (salary) => {

    return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//Read about currying Function Technique and nested arrow function

