function multiply(...numbers) {
    let product = 1;
    for(let index = 0; index < numbers.length; index++) {
        if(typeof numbers[index] === "string") {
            continue;
        }
        if(!Number.isInteger(numbers[index])) {
            numbers[index] = Math.trunc(numbers[index]);
        }
        product *= numbers[index];
    }
    console.log(product);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000