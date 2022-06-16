'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // returning array to be destructed
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    //de-structuring completed, they can be looged to the console immediately
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} } `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Rest Pattern

// Looks exactly like the spread operator, but it actually does the opposite of the spread operator.

// It collects multiple elements and collects them into a single array.

// Unpacking = spread operator
// Packing = rest operator

// Destructuring:

const arr = [1, 2, ...[3, 4]]; // Spread, because it's on the right side of the assignment operator

const [a, b, ...others] = [1, 2, 3, 4, 5];

// First and second element become first and second pattern, then the remaining (rest of) elements of the other array are placed into a new array

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); // pirza and risotto have been unpacked from the restaurant.mainMenu and assigned to pizza and risotto variables. Then rest pattern is used to place all the remaining food into an array

// Rest pattern cannot skip items, so rest pattern must always be used at the end, and there can only ever be one rest element in destructuring

//Objects

const { sat, ...weekdays } = restaurant.openingHours; // sat variable name matches name of property on the restaurant object, so it is stored in their. Then rest pattern used to place the rest of the properties into the weekdays variable. Remember, when destructing objects, the order of the variable assignment doesn't matter

console.log(weekdays);

// Functions:

const add = function (...numbers) {
  //rest parameters are packing the arguments into an array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

//working function that can accept any number of parameters

add(2, 3);

add(2, 3, 4, 2, 1);

add(2, 5, 6, 5.2);

const x = [23, 5, 7];

add(...x); // all elements of x array are spread into the add function as arguments. Then add function is packaging these arguments back into an array, and this array is being iterated on to perform the sum.

// function can accept both array and normal values this way.

restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');

// main ingredient mushroom is logged, then an array of onions olives and spinach is logged

restaurant.orderPizza('mushrooms'); // empty array as there are no otherIngredients passed into the function call
