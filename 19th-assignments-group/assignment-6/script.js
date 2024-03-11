let chosen = 1;

let myFriends = [
{ title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
{ title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
{ title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
if(chosen === 1) {

    let [{title,age,available,skills: [,two]},,] = myFriends;

    if(myFriends[0].available == true) {
        available = "Available";
    }
    else {
        available = "Not Available";
    }

    console.log(title);
    console.log(age);
    console.log(available);
    console.log(two);
}
else if(chosen === 2) {

    let [,{title,age,available,skills: [,two]},] = myFriends;

    if(myFriends[1].available == true) {
        available = "Available";
    }
    else {
        available = "Not Available";
    }

    console.log(title);
    console.log(age);
    console.log(available);
    console.log(two);
}
else {

    let [,,{title,age,available,skills: [,two]}] = myFriends;

    if(myFriends[2].available == true) {
        available = "Available";
    }
    else {
        available = "Not Available";
    }

    console.log(title);
    console.log(age);
    console.log(available);
    console.log(two);
}
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"