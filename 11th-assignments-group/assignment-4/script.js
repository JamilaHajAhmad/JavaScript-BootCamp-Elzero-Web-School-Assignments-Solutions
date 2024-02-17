function checkStatus(a, b, c) {
    if(typeof a === "string") {
        if(typeof b === "number" && typeof c === "boolean") {
            if(c === true) {
                console.log(`"Hello ${a}, Your age = ${b}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${a}, Your age = ${b}, You are not available for hire"`);
            }
        }
        else if(typeof c === "number" && typeof b === "boolean") {
            if(b === true) {
                console.log(`"Hello ${a}, Your age = ${c}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${a}, Your age = ${c}, You are not available for hire"`);
            }
        }
    }
    else if(typeof b === "string") {
        if(typeof a === "number" && typeof c === "boolean") {
            if(c === true) {
                console.log(`"Hello ${b}, Your age = ${a}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${b}, Your age = ${a}, You are not available for hire"`);
            }
        }
        else if(typeof c === "number" && typeof a === "boolean") {
            if(a === true) {
                console.log(`"Hello ${b}, Your age = ${c}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${b}, Your age = ${c}, You are not available for hire"`);
            }
        }
    }
    else if(typeof c === "string") {
        if(typeof a === "number" && typeof b === "boolean") {
            if(b === true) {
                console.log(`"Hello ${c}, Your age = ${a}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${c}, Your age = ${a}, You are not available for hire"`);
            }
        }
        else if(typeof b === "number" && typeof a === "boolean") {
            if(a === true) {
                console.log(`"Hello ${c}, Your age = ${b}, You are available for hire"`);
            }
            else {
                console.log(`"Hello ${c}, Your age = ${b}, You are not available for hire"`);
            }
        }
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
