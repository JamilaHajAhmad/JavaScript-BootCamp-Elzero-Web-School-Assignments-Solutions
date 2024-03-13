let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let myUniqueFriends = Array.from(new Set(myFriends)).sort();

console.log(myUniqueFriends);

// Needed Output
(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']