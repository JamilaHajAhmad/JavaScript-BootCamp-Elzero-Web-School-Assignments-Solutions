let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let removed = mix.shift();

for(start; start < mix.length; start++) {
    if(mix[start] == removed) {
        continue;
    }
    else {
        if(typeof mix[start] == "number") {
            console.log(mix[start]);
        }
        else {
            continue;
        }
    }
}
// Output
2
3
4