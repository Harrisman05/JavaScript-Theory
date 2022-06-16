// console.log(me); // var hoisted but is set to undefined
// console.log(job); // referenceError: cannot access job before initialisation - job is still in TDZ
// console.log(year); // referenceError: cannot access job before initialisation - year is still in TDZ

// var me = "Harley";
// let job = "programmer";
// const year = 1997;

// Functions

//Function declaration

console.log(addDecl(1, 2)); // hoisted so can be called before declared
console.log(addExpr(1, 2)); // not hoisted, created using const (in TDZ)
console.log(addArrow(1, 2)); // not hoisted, created using const (in TDZ)

function addDecl(a, b) {
  return a + b;
}

// Function expression

const addExpr = function (a, b) {
  return a + b;
};

// Arrow Function (type of function expression)

const addArrow = (a, b) => a + b;

// var function

console.log(varExpr); // Uncaught TypeError: addArrow is not a function
// because var is hoisted to top and is set to undefined

var varExpr = function (a, b) {
  return a + b;
};
