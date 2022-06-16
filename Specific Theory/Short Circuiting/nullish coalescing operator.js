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

//

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// so here, because we use or, the first truthy value will be returned. However, 0 is falsy so the default value of 10 is used instead. This is an bug in a way, as restaurant.numGuests does contain a value, it just happens to be 0.

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// works on the concept of nullish values:

// Nullish: null and undefined (Not 0 or '')

// so, restaurant.numGuest is 0, therefore it is truthy in this case, so it returns 0. Only nullish values will short circuit the operands
