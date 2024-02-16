let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let index = letter.indexOf(letter);

for(index; index < friends.length; index++) {
    if(friends[index].startsWith(letter.toUpperCase())) {
        continue;
    }
    else {
        console.log(`"${index} => ${friends[index]}"`);
    }
}
// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"