"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName; // passing parameter to make property on this keyword, like in Python
  this.birthYear = birthYear; // instance properties
};

// Prototypes

const harley = new Person("harley", "1997");

Person.prototype.calcAge = function () {
  // console.log(2022 - this.birthYear);
}; // all objects created by Person constructor function will inherit all the methods/properties that are defined on the prototype object eg here, I define the calcAge method on the Person.prototype object.

// console.log(Person.prototype); // all instantiated objects have access to the prototype method calcAge. No duplication in creating methods. Similar to class method in Python

harley.calcAge(); // does not contain calcAge method, that is on prototype object

// console.log(harley.__proto__);
// console.log(harley.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapiens";

console.log(harley.species);

console.log(harley.hasOwnProperty("firstName"));
console.log(harley.hasOwnProperty("species"));
