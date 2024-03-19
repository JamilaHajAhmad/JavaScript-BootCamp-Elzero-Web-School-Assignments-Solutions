// Needed Output
let dateNow = new Date();
let birthDay = new Date("2003-11-01");
let difference = dateNow - birthDay;
console.log(`${parseInt(difference/1000)} Seconds`);
console.log(`${parseInt(difference/1000/60)} Minutes`);
console.log(`${parseInt(difference/1000/60/60)} Hours`);
console.log(`${parseInt(difference/1000/60/60/24)} Days`);
console.log(`${parseInt(difference/1000/60/60/24/30)} Months`);
console.log(`${parseInt(difference/1000/60/60/24/365)} Years`);

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"