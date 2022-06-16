"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`; // scope chain allows firstName to be accessed
      console.log(str);

      function blockScoped(a, b) {
        console.log(a + b);
        return a + b;
      }
      blockScoped(1, 2); //
    }
    console.log(millenial); // var not block-scoped
    // blockScoped(); function is block scoped in ES6 strict mode.
  }
  printAge();

  return age;
}

const firstName = "Harley";

calcAge(1991);

const hi = "hello1";
console.log(hi);

{
  const hi = "hello2";
  console.log(hi);
  {
    const hi = "hello3";
    console.log(hi);
  }
}

let bye = "bye1";
const bye2 = "bye2";

function log() {
  const bye2 = "inner bye2";
  if (true) {
    bye = "reassigned bye";
    console.log(bye2);
  }
}

log();

console.log(bye);
console.log(bye2);
