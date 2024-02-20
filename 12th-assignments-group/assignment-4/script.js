// function specialMix(...data) {
//     let numberFromStringValue;
//     let result = 0;
//     let counter = 0;
//     for(let i = 0; i < data.length; i++) {
//         if(typeof data[i] === "string" && !isNaN(data[i].charAt(0))) {
//             numberFromStringValue = parseInt(data[i]);
//             result += numberFromStringValue;
//         }
//         if(typeof data[i] === "number") {
//             result += data[i];
//         }
//         if(typeof data[i] === "string" && isNaN(data[i].charAt(0))) {
//             counter++;
//         }
//     } 
//     if(counter === data.length) {
//         result = "All are strings";
//     }
//     return result;
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// Another solution: 
function specialMix(...data) {
    let numberFromStringValue = 0;
    let result = 0;
    let counter = 0;
    for(let i = 0; i < data.length; i++) {
        if(typeof data[i] === "string" && !isNaN(data[i].charAt(0))) {
                let j = 1;
                for(; j < data[i].length; j++) {
                if(!isNaN(data[i][j])) {
                    continue;
                }
                if(isNaN(data[i][j])) {
                    break;
                }
            }
                numberFromStringValue = Number(data[i].slice(0,j));
                result += numberFromStringValue;
            }
        if(typeof data[i] === "number") {
            result += data[i];
        }
        if(typeof data[i] === "string" && isNaN(data[i].charAt(0))) {
            counter++;
        }
    }  
    if(counter === data.length) {
        result = "All are strings";
    }
    return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/*
Don't forget that isNaN() method checks if the parameter is number or not 
and parseInt() method returns the integer part of the parameter
*/
