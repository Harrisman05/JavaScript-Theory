// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";

// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

// marriedJessica = {};

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = "Davis";
jessicaCopy.family[0] = "Re-assigned Dave";

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
