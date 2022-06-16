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

console.log(harley.__proto__);
console.log(harley.__proto__ === Person.prototype);

Person.prototype.species = "Homo Sapiens";

console.log(harley.species);

console.log(harley.hasOwnProperty("firstName"));
console.log(harley.hasOwnProperty("species"));

console.log(harley.__proto__); // Person.prototype property
console.log(harley.__proto__.__proto__); // object.prototype property
console.log(harley.__proto__.__proto__.__proto__); // top of prototype chain

console.dir(Person.prototype.constructor);

const arr = [1, 1, 1, 2, 3, 4, 5];

console.log(arr.__proto__); // array.prototype property
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // object.prototype property
console.log(arr.__proto__.__proto__.__proto__); //null

Array.prototype.unique = function () {
  return [...new Set(this)]; // this is set to the array this method would be called
};

console.log(arr.unique());
