// class expression

const PersonClass2 = class {
  constructor(firstName, birthYear) {}
};

// class declaration

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const harley = new PersonClass("harley", 1997);
console.log(harley);
harley.calcAge();

console.log(harley.__proto__ === PersonClass.prototype); //true

harley.greet();
