let a = 10;
a < 10 ? console.log(10) :
a >= 10 && a <= 40 ? console.log("10 To 40")
: a > 40 ? console.log("> 40")
: console.log("Unknown")

let st = "Elzero Web School";

if (st !== "string") {
    console.log("Good");
  }
  
  if (Boolean(st.slice(2,6)) === Boolean("number")) {
    console.log("Good");
  }
  
  if (st.slice(0,6)+st.slice(0,6) === "ElzeroElzero") {
    console.log("Good");
  } 
  
  if (st.substr(st.indexOf("W"),1).toLowerCase() === "w") {
    console.log("Good");
  }