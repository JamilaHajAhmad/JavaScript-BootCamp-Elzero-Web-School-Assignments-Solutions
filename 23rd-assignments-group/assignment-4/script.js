// Needed Output
let birthDay1 = new Date("2003-11-01");
birthDay1.setHours(0,0,0);
console.log(birthDay1);

let birthDay2 = new Date();
birthDay2.setFullYear(2003,10,1);
birthDay2.setHours(0,0,0);
console.log(birthDay2);

let birthDay3 = new Date(2003,10,1,0,0,0);
console.log(birthDay3);

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"