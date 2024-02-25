let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function(element) {
    return isNaN(element);
}).map(function(element) {
    for(let i = 0; i < element.length; i++) {
        if(element == '_') {
            return " ";
        }
        if(myString.indexOf(element) == myString.length - +true) {
            return "";
        }
        if(element.charAt(i) == element.charAt(i+1)) {
            return element.charAt(i);
        }
        else {
            return element;
        }
        
    }
}).reduce(function(accumulator,current) {
    return accumulator+current;
})

    
console.log(solution); // Elzero Web School