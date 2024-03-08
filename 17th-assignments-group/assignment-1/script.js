let range = window.prompt("Print Number From – To","Example: 5-20");
range = range.split("-");
let num1 = Number(range[0]), num2 = Number(range[1]);
let min = Math.min(num1,num2), max = Math.max(num1,num2);

while(min <= max) {
    console.log(min++);
}