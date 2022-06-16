// Repeat

const airportMessage = "Bad weather... All Departures delayed... ";

console.log(airportMessage.repeat(5));

const planesWaiting = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesWaiting(5);
planesWaiting(10);
planesWaiting(8);
