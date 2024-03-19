// Edit The Class
class User {
    #c;
    constructor(username, card) {
    this.u = username;
    this.#c = card;
    }
    addCharacter() {
        this.#c = this.#c.toString();
        if(!this.#c.includes('-')) {
            let first = this.#c.slice(0,4);
            let second = this.#c.slice(4,8);
            let third = this.#c.slice(8,12);
            let forth = this.#c.slice(12,16);
            let output = [];
            output.push(first,second,third,forth);
            output = output.join().replaceAll(",","-");
            return output;
        }
        else {
            return this.#c;
        }
    }
    get showData() {
        return `Hello ${this.u} your credit card number is ${this.addCharacter()}`;
    }
}

  // Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined

  // You can search for getters to get method as property
  // You can use RegExp to change number into credit card format

  // this.c#.toString().match(/\d{4}/g).join("-")