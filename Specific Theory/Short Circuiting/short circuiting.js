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

// Short circuiting - AND + OR

// Logical operators can use any type
// Can return any data type
// Perform short-circuit evaluation

console.log(3 || 'Jonas'); // using non-boolean values as the operands, returns 3

// Short-cicuiting with OR

// If the first operand is a truthy value, then it will immediately be returned. The second value will not be looked at

console.log('' || 'Jonas'); // empty string is falsy, so "Jonas" is returned

console.log(true || 0); // true is true, so it is returned

console.log(undefined || null); // undefined is falsy, so null is returned (even though null is also falsy)

console.log(undefined || 0 || '' || 'hello' || 23 || null); // 'hello' is returned first because it is truthy and will short circuit the entire evaluation

// For OR, if at least one operand is true, it always returns true. That's why short-circuiting occurs here

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// this translates to, does restaurant.numGuests exist (it's not, as it's undefined)? If not, then set restaurant.numGuests to 10

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

// now, restaurant.numGuests does exist, so 23 is logged as it is truthy

// Using short-circuiting

// in guests3, restaurant.numAttendees is undefined, so 10 will be returned as the default
const guests3 = restaurant.numAttendees || 10;
console.log(guests3);

restaurant.numAttendees = 111;
const guests4 = restaurant.numAttendees || 23;
console.log(guests4);

// it will not work if numGuests = 0 as both operands will be falsy

console.log(' ----------- AND (&&) --------------');

// Works in the complete opposite way to ||, it will short-circuit as soon as it comes in contact with a falsy value. This makes sense because the && operator is true only if ALL operands are true. As soon as it comes into contact with a falsy value, it short circuits because all operands cannot be true in this case

console.log(0 && 'Jonas'); // 0 returned because it's falsy
console.log(true && ''); // '' returned as it's falsy

console.log('hello' && 23 && null && 'jonas'); // null is the only falsy value here, so it is returned as evaluation no longer needs to continue, as AND evaluation will be false anyway

console.log('hello' && 'goodbye'); // both are truthy, so goodbye will be returned

// Practical example

// Practically, OR can be used to set default values. && can be used to execute code in the second operand if the first one is true

// Using if-else

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Same code using short circuiting

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// So, if restaurant.orderPizza method exists (ie is truthy), continue the execution and execute restaurant.orderPizza('mushroom', 'spinach');

// Otherwise, if restaurant.orderPizza method does not exist, it will return falsy and therefore short-circuit, so the method will not execute
