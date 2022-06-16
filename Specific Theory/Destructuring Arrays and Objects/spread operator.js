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

// Spread Operator

// USE CASES: Can be used to build new arrays or pass multiple values into a function

// Creating a new array the bad way

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Spread Operator

// The spread operator takes all the elements out of the arr array and write them into the new array, no need to write them in manually

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // spread operator will log the individual element of the array
console.log(1, 2, 7, 8, 9); // spread operator would be the same

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //square brackets used to build new array

console.log(newMenu); // now Gnocci is added

// spread operator is similar to destructing - can help get elements out of an array. The difference:

// Spread operator takes ALL the elements from the array

// It doesn't create a new variables, so we can only use it where we would be writing new elements in an array

// 2 use cases

// Copy array

const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of main menu created

// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; //... takes all the elements out of each array

// Spread operator can be used on all iterbales
// Iterables are arrays, strings, maps and sets (NOT objects)

const str = 'Harley';

const letters = [...str, ' ', 'H']; //...str expands the string into it's separate characters

console.log(letters);

console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

// Old way to call this order Pasta

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// With spread operator (extracts the elements from the ingredients const and passes them into the function)

restaurant.orderPasta(...ingredients);

// Objects can be used with spread operator

const newRestaurant = { ...restaurant, founder: 'Giuseppe', foundedin: 1998 }; // spread operator copys all of the properties of the old restaurant object. This is a SHALLOW copy, so any changes to newRestaurant properties will affect the old restaurant as well

console.log(newRestaurant);

// a full copy of the restaurant object is made (no problems with re-assigning properties that coould affect the old variable)

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
