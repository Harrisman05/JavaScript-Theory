"use strict";

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// "use strict";

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

const harley = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

const matilda = {
  year: 2017,
};

matilda.calcAge = harley.calcAge;
// copying calcAge method from harley to matilda
// Method Borrowing

matilda.calcAge();

// const f = harley.calcAge;
// f();
