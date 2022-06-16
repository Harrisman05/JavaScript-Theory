const flight = "LH234";

const harley = {
  firstName: "Harley",
  secondName: "Harris",
  passport: 124362345,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.firstName;

  if (passenger.passport === 124362345) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};

checkIn(flight, harley);

console.log(flight);
console.log(harley);
