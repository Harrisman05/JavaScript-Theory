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

// Destructing arrays (unpacking arrays)

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// This can can destructed at the same time

const [x, y, z] = arr;
console.log(x, y, z);

// extracting first 2 items from the array
// can leave a hole to skip a variable

let [first, , third] = restaurant.categories;

console.log(first, third);

// re-assigning items in the array without destructing (the long way)

let [main, , secondary] = restaurant.categories;

const temp = main; // temporary variable created to assign one of the variables
main = secondary;
secondary = temp; //can't do secondary = main, because main would be overwritten by this point
console.log(main, secondary); //here they are switched

// Using de-structing

[third, first] = [first, main]; // now they are swapped
console.log(main, secondary);

restaurant.order(2, 0); // element 2 from starter menu and element 0 from the main menu

console.log(restaurant.order(2, 0)); // return an array

// Can receive 2 return values from a function

let [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

// De-structurung nested arrays

const nested = [2, 4, [5, 6]];
const [firstValue, , lastValue] = nested;
console.log(firstValue, lastValue);

// destructuring within destructuring

const [i, j, [k, l]] = nested;

console.log(i, j, k, l);

// Default values

// useful when we don't know how much data we are receiving from an array
const [p = 0, q = 0, r = 0] = [8, 9];
console.log(p, q, r);

// destructuring Objects

// curly braces are used to de-structure objects, provide variable names that exactly match the property names to extract the values

const { name, openingHours, categories } = restaurant; // order doesn't matter, variable names match property names

console.log(name, openingHours, categories);

// Want variable names to be different to the property names?

const {
  name: restaurantName, // each variable given new name using :
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// setting default values and changing variable names combined

const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters); // menu doens't exist so default parameter will appear

// Mutating variables

let s = 111;
let t = 999;

const obj = { s: 23, t: 7, u: 14 };

// {s, t} = obj // --- this re-assignment won't work because JavaScript is expecting a code block and you cannot assign a code block - Uncaught SyntaxError: Unexpected token '='

// the trick is to wrap everything in parenthesis to prevent this error

({ s, t } = obj);

console.log(s, t); // s and t re-assigned from 111/999 to 23, 7

// Nested objects

const { fri } = openingHours;
console.log(fri); // returns another object

const {
  fri: { open, close },
} = openingHours; // colon needed after first object for further destructuring
console.log(open, close); // open and close values destructured from nested object

// Using object destructuing to assign a lot of parameters to a function
// How? Object passed into the function as an argument, then this object is immediately destructured.

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// function is called and an object of options is passed in. One argument (object) is passed in and then it is immediately destructured. Really good way to pass in parameters without knowing the order

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21', // using default values for mainIndex and starterIndex
});
