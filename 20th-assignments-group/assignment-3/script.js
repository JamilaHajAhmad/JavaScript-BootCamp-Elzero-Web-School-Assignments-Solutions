let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

let myMap = new Map();
myMap.set("username",myInfo.username);
myMap.set("role",myInfo.role);
myMap.set("country",myInfo.country);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
//  true