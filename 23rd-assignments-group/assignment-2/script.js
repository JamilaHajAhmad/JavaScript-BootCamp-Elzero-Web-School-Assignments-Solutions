// Needed Output
let date = new Date();
date.setFullYear(1980,0,1);
date.setHours(0,0,1);
console.log(date);
// Another way
let date2 = new Date(0);
date2.setFullYear(1980);
date2.setHours(0,0,1);
console.log(date2);
//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"