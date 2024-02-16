let start = 0;
let swappedName = "elZerO";

for(start; start < swappedName.length; start++) {

    let character = swappedName.charAt(start);
    if(character == character.toUpperCase()) {
        swappedName.charAt(start).toLowerCase();
        console.log(swappedName.charAt(start));
        break;
    }
    else if(character == character.toLowerCase()) {
        swappedName.charAt(start).toUpperCase();
    }
}

console.log(swappedName);
// Output
"ELzERo"