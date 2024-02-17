function showDetails(a,b,c) {

    let name,age,status;

    typeof a === "string" ? name = a : typeof a === "number" ? age = a : a === true ?
    status = "You are available for hire": status = "You are not available for hire";

    typeof b === "string" ? name = b : typeof b === "number" ? age = b : b === true ?
    status = "You are available for hire": status = "You are not available for hire";

    typeof c === "string" ? name = c : typeof c === "number" ? age = c : c === true ?
    status = "You are available for hire": status = "You are not available for hire";

    console.log(`"Hello ${name}, Your age = ${age}, ${status}"`);
    
}
showDetails("Osama", 38, true); 
showDetails(38, "Osama", true); 
showDetails(true, 38, "Osama"); 
showDetails(false, "Osama", 38);