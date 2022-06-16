"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName; // passing parameter to make property on this keyword, like in Python
  this.birthYear = birthYear; // instance properties

  this.calcAge = function () {
    // bad practise, would create 1000 copies of this function, bad for code performance. Prototypes + prototypal inheritance used to combat this issue
    console.log(2022 - this.birthYear);
  };
};

// new used to create constructor function

const harley = new Person("Harley", "1997");
const jessica = new Person("Jessica", "1971");
const martin = new Person("Martin", "1984");

console.log(harley);
console.log(harley instanceof Person);
console.log(jessica);
console.log(martin);

// 1. new empty object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns the object, with any properties created too (so Person is blueprint, const harley is an object of the Person blueprint (ie constructor function))
