let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


while(index < friends.length) {
    
    if( (typeof friends[index] == "string" && friends[index].startsWith("A")) || 
    typeof friends[index] == "number" ) {
        index++;
        continue;
    }
    else {
        console.log(`"${++counter} => ${friends[index]}"`);
        index++;
    }
}

// Note that the variable which you apply startswith() function must be string
// Output
"1 => Sayed"
"2 => Mahmoud"