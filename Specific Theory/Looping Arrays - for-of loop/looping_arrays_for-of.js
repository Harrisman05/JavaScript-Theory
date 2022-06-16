cars = [
  "volvo",
  "renault",
  "toyota",
  "ford",
  "rolls-royce",
  "bugatti",
  "bentley",
];

// For-of loops

// makes it easier to loop through arrays

for (const element of cars) console.log(element);

for (const element of cars.entries()) {
  console.log(element);
}

// .entries() creates a new array containing the index and value of the element of the original array

// destructuring to extract index and element in one go

for (const [i, el] of cars.entries()) {
  console.log(`${i + 1}: ${el}`);
}
