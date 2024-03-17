// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car {
    constructor(name,model,price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return 'Car is running now';
    }
    stop() {
        return 'Car is stopped';
    }
}

let car1 = new Car('Kia',2020,100000);
let car2 = new Car('Honda',2023,40000);
let car3 = new Car('Toyota',2012,10000);

console.log(`Car one name is ${car1.n} and model is ${car1.m} and price is ${car1.p}`);
console.log(car1.run());
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"