const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Pizza",
  "Pizza",
  "Risotto",
  "Linguine",
  "Spaghetti",
]);

// normally arrays are passed into sets

console.log(orderSet);

const stringSet = new Set("harley");

// a string is an iterable, so each string character is comma-separated
// in the set

console.log(stringSet);

console.log(stringSet.size); // get size of set, similar to length method for arrays

console.log(orderSet.has("Pizza")); // check for item in set, similar to includes method
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread"); // add an unique item
orderSet.delete("Spaghetti"); // delete an unique item

// cannot retrieve items from set, just use has

// orderSet.clear();
// console.log(orderSet);

for (const setItems of orderSet) {
  // looping through set
  console.log(setItems);
}

// main use case of sets is to remove duplicate values from arrays

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

restaurantPositions = new Set(staff);

console.log(restaurantPositions);

const uniqueStaffArray = [...new Set(staff)];
console.log(uniqueStaffArray);

console.log(new Set("harley").size);
