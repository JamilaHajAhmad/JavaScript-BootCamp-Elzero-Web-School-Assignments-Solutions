let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)) {
    console.log("Found");
}
if(haystack[1] == needle) {
    console.log("Found");
}
haystack.pop();
haystack.shift();
if(haystack == needle) {
    console.log("Found");
}